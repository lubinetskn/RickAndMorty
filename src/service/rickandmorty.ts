import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rickandmortyapi = createApi({
  reducerPath: "rickandmorty",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/",
  }),
  tagTypes: ["rickandmorty"],
  endpoints: (builder) => ({
    updatePerson: builder.mutation({
      query: () => "",
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          rickandmortyapi.util.updateQueryData("getPersonById", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ({ id }) => [{ type: "rickandmorty", id }],
    }),

    getPersonById: builder.query<any, string>({
      query: (id: string) => `character/${id}`,
    }),
    getPersons: builder.query<any, any>({
      query: (params) => {
        return {
          url: "character/",
          params,
        };
      },
    }),
  }),
});

export const {
  useUpdatePersonMutation,
  useGetPersonByIdQuery,
  useGetPersonsQuery,
} = rickandmortyapi;
