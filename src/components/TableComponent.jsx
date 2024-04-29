import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "./table.css";
import EditIcon from "@mui/icons-material/Edit";
import { useFormData } from "../context/FormValuesContext";
import { Link } from "react-router-dom";
const TableComponent = () => {
  const { userList, getUserList } = useFormData();
  useEffect(() => {
    getUserList();
  }, []);

  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHeaderCell">Name</TableCell>
            <TableCell className="tableHeaderCell">Email</TableCell>
            <TableCell className="tableHeaderCell">Phone</TableCell>
            <TableCell className="tableHeaderCell">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "tableRowEven" : ""}
            >
              <TableCell className="tableCell">{user.name}</TableCell>
              <TableCell className="tableCell">{user.email}</TableCell>
              <TableCell className="tableCell">{user.phone}</TableCell>
              <TableCell className="tableCell">
                <Link to={`/edituser/${user.id}`}>
                  <EditIcon className="editIcon" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
