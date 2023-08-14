import React, { useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useFetchData } from "./hooks/useFetchData";
import { Loader } from "../../components/Loader";
import { BasicCard } from "../../components/BasicCard";
import Typography from "@mui/material/Typography";

/**
 * Стартовая страница
 * ОТредактированные персонажи на ней не отображаются
 * Редакцию персонажей отслеживаю только в детальной карточке
 */
const StartPage = () => {
  const [page, setPage] = useState(1);
  const { count, result } = useFetchData({ page });
  const paginationCount = count ? Math.ceil(count / 10) : 0;
  const handleChange = (e: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  if (!result) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 5,
        mx: 3,
        mb: 3,
        minHeight: `calc(100vh - 160px)`,
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{ my: 4, color: "primary.main" }}
      >
        Star Wars Persons
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }}>
        {result?.map(
          ({ name, gender, height, mass, url }: Record<string, any>) => (
            <Grid item xs={12} md={6} key={name}>
              <BasicCard
                key={name}
                name={name}
                gender={gender}
                height={height}
                mass={mass}
                url={url}
              />
            </Grid>
          )
        )}
      </Grid>
      <Stack spacing={2} sx={{ mt: 4 }}>
        <Pagination
          onChange={handleChange}
          count={paginationCount}
          color="primary"
          hidePrevButton
          hideNextButton
        />
      </Stack>
    </Box>
  );
};

export { StartPage };
