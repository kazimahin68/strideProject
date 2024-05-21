import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "about",
            element: <About></About>
        },
        {
            path: "login",
            element: <Login></Login>
        }
      ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
            }
        ]
    }
  ]);