import { TextField } from "@mui/material";
import { useSearchParamsState } from "utils/search-param";

export function SearchPerson() {
  const [textSearch, setTextSearch] = useSearchParamsState({
    name: "name",
    desirialize: (v) => (v ? v : ""),
  });

  const [page, setPage] = useSearchParamsState({
    name: "page",
    desirialize: (v) => (v ? v : ""),
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    const value = event.target.value;
    setTextSearch(value);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        data-testid="search-field"
        label="Search person"
        variant="outlined"
        placeholder="type name"
        onChange={onChange}
        value={textSearch}
      />
    </>
  );
}
