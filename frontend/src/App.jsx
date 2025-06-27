import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
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
    // console.log(newJob);
    const res = await fetch("/api/jobs", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login addUser={addUser} />} />
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
