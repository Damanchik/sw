import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import Box from "@mui/material/Box";

/**
 * Компонент ошибки роутинга
 */
const ErrorPage = () => {
  const error = useRouteError() as Error;
  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <Box sx={{ px: 3, py: 2, height: `calc(100vh - 160px)` }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Box>
  );
};

export { ErrorPage };
