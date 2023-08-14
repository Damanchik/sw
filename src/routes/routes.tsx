import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { StartPage } from "../pages/StartPage";
import { PersonPage } from "../pages/PersonPage";
import { ErrorPage } from "../components/ErrorPage";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <StartPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "people/:id",
    element: (
      <Layout>
        <PersonPage />
      </Layout>
    ),
  },
]);
