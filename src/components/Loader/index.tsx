import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

/**
 * Лоадер
 */
const Loader = () => {
  return (
    <Box
      sx={{
        m: 4,
        height: `calc(100vh - 160px)`,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export { Loader };
