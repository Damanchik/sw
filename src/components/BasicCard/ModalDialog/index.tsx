import React, { ChangeEvent, FC, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";

interface IModalDialog {
  isOpen: boolean;
  name: string;
  gender: string;
  height: string;
  mass: string;
  handleClose: () => void;
}

/**
 * Компонент отправки формы в диалоговом окне
 */
const ModalDialog: FC<IModalDialog> = ({
  isOpen,
  name,
  gender,
  height,
  mass,
  handleClose,
}) => {
  const [data, setData] = useState({
    name,
    gender,
    height,
    mass,
  });

  /** * Записывает в локалсторадж как условное редактирование */
  const handleSubmit = () => {
    localStorage.setItem(window.location.pathname, JSON.stringify(data));
    window.location.reload();
  };

  const handleChange = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    const id = (e.target as HTMLInputElement).id;
    setData((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
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
          value={height}
          onChange={handleChange}
        />
        <TextField
          required
          id={mass}
          label="mass"
          value={data.mass}
          onChange={handleChange}
        />
        <Button sx={{ mt: 2 }} onClick={handleSubmit}>
          Update
        </Button>
      </Box>
    </Dialog>
  );
};

export { ModalDialog };
