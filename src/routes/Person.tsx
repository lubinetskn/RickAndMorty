import { useParams } from "react-router-dom";

import { useGetPersonByIdQuery } from "service/rickandmorty";
import { PersonCard } from "components/person-card";

export function Person() {
  const { personId } = useParams();
  const { data, error, isLoading } = useGetPersonByIdQuery(personId);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return (
      <pre>
        <code>
          {JSON.stringify(
            {
              error,
            },
            null,
            2
          )}
        </code>
      </pre>
    );
  }

  return <PersonCard user={data} />;
}
