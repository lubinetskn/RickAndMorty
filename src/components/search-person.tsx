import { TextField } from "@mui/material";
import { useSearchParamsState } from "utils/search-param";

export function SearchPerson() {
  const [textSearch, setTextSearch] = useSearchParamsState({
    name: "name",
    desirialize: (v) => (v ? v : ""),
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTextSearch(value);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Search person"
        variant="outlined"
        placeholder="type name"
        onChange={onChange}
        value={textSearch}
      />
    </>
  );
}
