import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import UserList from "./page/userList/UserList";
import AddUserForm from "./page/adduser/AddUserForm";
import { ToastContainer } from "react-toastify";
import EditUserForm from "./page/edituser/EditUserForm";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <UserList />
            </Suspense>
          }
        />
        <Route
          path="/adduser"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AddUserForm />
            </Suspense>
          }
        />
        <Route
          path="/edituser/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <EditUserForm />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
