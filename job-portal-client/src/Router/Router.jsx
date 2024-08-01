import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import Login from "../components/Login";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/salary",
        element: <SalaryPage />,
      },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-jobs/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
