import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import { useGetPersonsQuery } from "service/rickandmorty";
import { ToggleButtons } from "components/toggle-buttons";
import { BasicTable } from "components/person-table";
import { PersonPanels } from "components/person-panels";
import { SearchPerson } from "components/search-person";
import { PersonPagination } from "components/person-pagination";
import { getSearchParam } from "utils/search-param";
import { TError } from "types/TError";

export function PersonList() {
  const { search } = useLocation();
  const [view, setView] = useState("list");

  const { data, error, isLoading, refetch } = useGetPersonsQuery({
    name: getSearchParam(search, "name") || "",
    page: getSearchParam(search, "page") || 1,
  });

  useEffect(() => {
    refetch();
  }, [search]);

  const renderTable = (
    isLoading: boolean,
    view: string,
    error: TError,
    data: any
  ) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error && error?.status === 404) {
      return <div>Nothing found</div>;
    }

    if (error) {
      return <div>Error: {error?.data?.error}</div>;
    }

    return (
      <>
        {view === "list" ? (
          <BasicTable data={data.results} />
        ) : (
          <PersonPanels data={data.results} />
        )}
      </>
    );
  };

  return (
    <div>
      <Box margin="20px 0">
        <ToggleButtons view={view} setView={setView} />
      </Box>
      <Box margin="20px 0">
        <SearchPerson />
      </Box>

      {renderTable(isLoading, view, error, data)}

      {!error && (
        <Box margin="20px 0">
          <PersonPagination
            count={data?.info?.pages}
            page={Number(getSearchParam(search, "page"))}
          />
        </Box>
      )}
    </div>
  );
}
