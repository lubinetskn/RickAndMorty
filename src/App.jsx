import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "routes/ErrorPage";
import { NoMatch } from "routes/NoMatch";
import { PersonList } from "routes/PersonList";
import { Person } from "routes/Person";

import { MainLayout } from "./layout/main-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PersonList />,
      },
      {
        path: "person/:personId",
        element: <Person />,
      },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
