import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ModalDialog } from "./ModalDialog";

interface IBasicCard {
  name: string;
  gender: string;
  height: string;
  mass: string;
  url: string;
  isEdit?: boolean;
}

/**
 * Информаионная карточка
 */
const BasicCard: FC<IBasicCard> = ({
  name,
  gender,
  height,
  mass,
  url,
  isEdit,
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Person
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          gender: {gender}
          <br />
          height: {height}
          <br />
          mass: {mass}
        </Typography>
      </CardContent>
      <Box sx={{ m: 2 }}>
        {isEdit ? (
          <Button onClick={handleOpen}>Redact</Button>
        ) : (
          <Link to={url.replace("https://swapi.dev/api/", "")}>Learn More</Link>
        )}
      </Box>
      <ModalDialog
        isOpen={isOpen}
        name={name}
        gender={gender}
        height={height}
        mass={mass}
        handleClose={handleClose}
      />
    </Card>
  );
};
export { BasicCard };
