import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Home from "./routes/home";
import Events from "./routes/events";
import Fundraiser from "./routes/fundraiser";
import Resources from "./routes/resources";
import GetInvolved from "./routes/getinvolved";
import Journal from "./routes/journal";
import About from "./routes/about";
import Statements from "./routes/statements";
import CreatePost from "./routes/createpost";
import Post from "./routes/post";
import EditPost from "./routes/editpost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "fundraiser",
        element: <Fundraiser />,
      },
      {
        path: "getinvolved",
        element: <GetInvolved />,
      },
      {
        path: "journal",
        element: <Journal />,
      },
      {
        path: "journal/:id",
        element: <Post />,
      },
      {
        path: "journal/:id/edit",
        element: <EditPost />,
      },
      {
        path: "journal/create",
        element: <CreatePost />
      },
      {
        path: "statements",
        element: <Statements />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "resources",
        element: <Resources />,
        children: [
          {
            path: "literature",
            element: <Resources />,
          },
        ]
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);