import React from "react";
import { Loader } from "../../components/Loader";
import { BasicCard } from "../../components/BasicCard";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useFetchData } from "./hooks/useFetchData";

/**
 * Детальная страница персонажа
 */
const PersonPage = () => {
  const { result } = useFetchData();
  if (!result) {
    return <Loader />;
  }
  const { name, gender, height, mass, url } = result;
  return (
    <Box sx={{ m: 4, height: `calc(100vh - 160px)` }}>
      <Typography
        variant="h3"
        component="div"
        sx={{ my: 4, color: "primary.main" }}
      >
        Person Info
      </Typography>
      <BasicCard
        name={name}
        gender={gender}
        height={height}
        mass={mass}
        url={url}
        isEdit
      />
    </Box>
  );
};

export { PersonPage };
