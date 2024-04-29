import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { ErrorToast, SuccessToast } from "../utils/Notification";
import { useNavigate } from "react-router-dom";

// Create Context
const FormDataContext = createContext();

// Custom hook to use FormDataContext
export const useFormData = () => useContext(FormDataContext);
const FormValuesProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const getUserList = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserList(data);
      // return data;
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };
  // Single User Details
  const getUserDetails = async (userId) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setSingleUser(data);
      // return data;
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  // Add User
  const handleAddUser = async (userData) => {
    try {
      const addUserApi = `https://jsonplaceholder.typicode.com/users`;
      const data = await axios.post(addUserApi, userData);
      return data;
    } catch (error) {
      console.error(error);
      ErrorToast("Something went wrong!");
    }
  };

  const handleEditUser = async (userId, userData) => {
    try {
      const updateUserApi = `https://your-api-endpoint.com/user/${userId}`;

      await axios.put(updateUserApi, userData);
      SuccessToast("User Details Updated Successfully!");
    } catch (error) {
      console.error(error);
      ErrorToast("Something went wrong!");
    }
  };

  const handleAddClick = () => {
    navigate("/adduser");
  };
  return (
    <FormDataContext.Provider
      value={{
        userList,
        getUserList,
        handleAddClick,
        handleAddUser,
        getUserDetails,
        singleUser,
        handleEditUser,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export default FormValuesProvider;
