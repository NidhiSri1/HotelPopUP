import { Button } from "@mui/material";
import "./App.css";
import { makeStyles } from "tss-react/mui";
import Dialouge from "./components/popup/Dialouge";
import { useState } from "react";

const useStyles = makeStyles()((theme) => ({
  button: {
    border: "1px solid #A37801",
    color: "black",
    textTransform: "none",
  },
}));

function App() {
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Button onClick={handleClickOpen} className={classes.button}>Enquire Now</Button>
      <Dialouge open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}></Dialouge>
    </div>
  );
}

export default App;
