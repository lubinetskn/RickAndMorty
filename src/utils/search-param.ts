import { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLatest } from "utils/use-latest";

export function getSearchParam(search: string, param: string) {
  const searchParams = new URLSearchParams(search);
  return searchParams.get(param);
}

export function setSearchParam(search: string, param: string, value: string) {
  const searchParams = new URLSearchParams(search);
  searchParams.set(param, value);
  return searchParams.toString();
}

const defaultDeserialize = (v) => v;
const defaultSerialize = String;

export function useSearchParamsState({
  name,
  serialize = defaultSerialize,
  desirialize = defaultDeserialize,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const [value, setValue] = useState(() => {
    const initialValue = desirialize(getSearchParam(location.search, name));

    return initialValue;
  });

  const latestValue = useLatest(value);

  const updateValue = useCallback(
    (newValue) => {
      const search = window.location.search;
      const actualNewValue =
        typeof newValue === "function"
          ? newValue(latestValue.current)
          : newValue;

      setValue(actualNewValue);

      const newSearch = setSearchParam(search, name, serialize(actualNewValue));

      navigate(`?${newSearch}`, { replace: true });
    },
    [latestValue, location, name, serialize]
  );

  return [value, updateValue];
}
