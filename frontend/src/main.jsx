import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import PrivateRoute from "./components/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";

import Root from "./routes/root";
import LoginPage from "./routes/LoginPage";
import ErrorPage from "./error-page";
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
import CreateStatement from "./routes/createStatement";
import Statement from "./routes/statement";
import EditStatement from "./routes/editStatement";
import CreateEvent from "./routes/createEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider><Root /></AuthProvider>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "calendar",
        element: <Events />,
      },
      {
        path: "calendar/create",
        element: <PrivateRoute><CreateEvent /></PrivateRoute>
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
        element: <PrivateRoute><EditPost /></PrivateRoute>,
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
        path: "statements/:id",
        element: <Statement />,
      },
      {
        path: "statements/:id/edit",
        element: <PrivateRoute><EditStatement /></PrivateRoute>,
      },
      {
        path: "statements/create",
        element: <PrivateRoute><CreateStatement /></PrivateRoute>
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