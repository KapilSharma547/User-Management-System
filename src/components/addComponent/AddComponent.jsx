import React from "react";
import { Typography, Button } from "@mui/material";
import "./addComponent.css";
import { useFormData } from "../../context/FormValuesContext";
const AddComponent = ({ heading, buttonText }) => {
  const { handleAddClick } = useFormData();
  return (
    <div className="addContainer">
      <Typography variant="h5" className="heading" gutterBottom>
        {heading}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className="addButton"
        onClick={handleAddClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default AddComponent;
