import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import "./addUserForm.css";
import { useFormData } from "../../context/FormValuesContext";
import { SuccessToast } from "../../utils/Notification";

const AddUserForm = () => {
  const { handleAddUser } = useFormData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
    if (name === "phone" && value !== "" && !Number.isNaN(Number(value))) {
      setFormData({ ...formData, [name]: value });
    } else if (name !== "phone") {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length === 0) {
      const data = await handleAddUser(formData);
      if (data) {
        SuccessToast("User Added Successfully!");
      }
      setFormData({ name: "", email: "", phone: "", status: "Active" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone is required";
    }
    return errors;
  };
  return (
    <form className="addUserForm" onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Add New User
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        // required
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        // required
      />
      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        error={!!errors.phone}
        helperText={errors.phone}
        fullWidth
        // required
      />
      <FormControl fullWidth required>
        <InputLabel>Status</InputLabel>
        <Select
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Add User
      </Button>
    </form>
  );
};

export default AddUserForm;
