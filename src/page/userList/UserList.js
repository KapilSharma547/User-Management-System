import React from "react";
import TableComponent from "../../components/TableComponent";
import AddComponent from "../../components/addComponent/AddComponent";
const UserList = () => {
  return (
    <div>
      <AddComponent heading="Add New Item" buttonText="Add" />
      <TableComponent />
    </div>
  );
};

export default UserList;
