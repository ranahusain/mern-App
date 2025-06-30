import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import axios from "axios";
import AllUsers from "./pages/AllUsers";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  //add USER
  const addUser = async (newUser) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/signup/",
        newUser
      );
      return res.data;
    } catch (error) {
      console.error("error in adding", error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/SignUp" element={<SignUp addUser={addUser} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AllUsers" element={<AllUsers />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
