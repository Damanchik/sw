import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * Футер. Не знаю, зачем сделал. Пусть будет
 */
const Footer: FC = () => (
  <Box sx={{ px: 3, py: 2, borderTop: "1px solid rgba(0, 0, 0, 0.2" }}>
    <Typography variant="h6">Footer data...</Typography>
  </Box>
);

export { Footer };
