import { Pagination } from "@mui/material";
import { useSearchParamsState } from "utils/search-param";

interface IPersonPagination {
  count: number;
  page: number;
}

export function PersonPagination({ count, page }: IPersonPagination) {
  const [value, setValue] = useSearchParamsState({
    name: "page",
    desirialize: (v) => (v ? v : ""),
  });

  const onChange = (e, newPage: number) => {
    setValue(newPage);
  };

  return (
    <Pagination
      count={count}
      onChange={onChange}
      page={Number(value) || 1}
      defaultPage={page}
    />
  );
}
