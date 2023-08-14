import React, { ChangeEvent, FC, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface IBasicCard {
  name: string;
  gender: string;
  height: string;
  mass: string;
  url: string;
  isEdit?: boolean;
}
const BasicCard: FC<IBasicCard> = ({
  name,
  gender,
  height,
  mass,
  url,
  isEdit,
}) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name,
    gender,
    height,
    mass,
  });

  /**
   * Записывает в локалсторадж как условное редактирование
   */

  const handleChange = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    const id = (e.target as HTMLInputElement).id;
    console.log("id", id, "value", value);
    setData((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    localStorage.setItem(window.location.pathname, JSON.stringify(data));
    window.location.reload()
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
      <Dialog onClose={handleClose} open={open}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          p={5}
        >
          <Typography variant="h5" component="div" sx={{ mb: 3 }}>
            Edit person
          </Typography>
          <TextField
            required
            id="name"
            label="name"
            value={data.name}
            onChange={handleChange}
          />
          <TextField
            required
            id="gender"
            label="gender"
            value={data.gender}
            onChange={handleChange}
          />
          <TextField
            required
            id={height}
            label="height"
            defaultValue={height}
            onChange={handleChange}
          />
          <TextField
            required
            id={mass}
            label="mass"
            defaultValue={data.mass}
            onChange={handleChange}
          />
          <Button sx={{ mt: 2 }} onClick={handleSubmit}>
            Update
          </Button>
        </Box>
      </Dialog>
    </Card>
  );
};
export { BasicCard };
