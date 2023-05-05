import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rickandmortyapi } from "service/rickandmorty";

export const store = configureStore({
  reducer: {
    [rickandmortyapi.reducerPath]: rickandmortyapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickandmortyapi.middleware),
});

setupListeners(store.dispatch);
