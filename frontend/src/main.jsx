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
import CreatePost from "./routes/createPost";
import Post from "./routes/post";
import EditPost from "./routes/editPost";
import CreateStatement from "./routes/createStatement";
import Statement from "./routes/statement";
import EditStatement from "./routes/editStatement";
import CreateEvent from "./routes/createEvent";
import DemocratiseEducation from "./routes/democratiseeducation";
import Gallery from "./routes/gallery";
import SignUp from "./routes/signup";
import Thanks from "./routes/thanks";
import CreateCallToAction from "./routes/createCallToAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider><Root /></AuthProvider>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <PrivateRoute><Home />,</PrivateRoute>
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "calendar",
        element:  <PrivateRoute><Events /></PrivateRoute>,
      },
      {
        path: "calendar/create",
        element: <PrivateRoute><CreateEvent /></PrivateRoute>
      },
      {
        path: "fundraisers",
        element: <PrivateRoute><Fundraiser /></PrivateRoute>,
      },
      {
        path: "getinvolved",
        element: <PrivateRoute><GetInvolved /></PrivateRoute>,
      },
      {
        path: "journal",
        element: <PrivateRoute><Journal /></PrivateRoute>,
      },
      {
        path: "journal/:id",
        element: <PrivateRoute><Post /></PrivateRoute>,
      },
      {
        path: "journal/:id/edit",
        element: <PrivateRoute><EditPost /></PrivateRoute>,
      },
      {
        path: "journal/create",
        element: <PrivateRoute><CreatePost /></PrivateRoute>,
      },
      {
        path: "statements",
        element: <PrivateRoute><Statements /></PrivateRoute>,
      },
      {
        path: "statements/:id",
        element: <PrivateRoute><Statement /></PrivateRoute>,
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
        element: <PrivateRoute><About /></PrivateRoute>,
      },
      {
        path: "democratiseeducation",
        element: <PrivateRoute><DemocratiseEducation /></PrivateRoute>,
      },
      {
        path: "gallery",
        element: <PrivateRoute><Gallery /></PrivateRoute>,
      },
      {
        path: "signup",
        element: <PrivateRoute><SignUp /></PrivateRoute>,
      },
      {
        path: "thanks",
        element: <PrivateRoute><Thanks /></PrivateRoute>,
      },
      {
        path: "callstoaction/create",
        element: <PrivateRoute><CreateCallToAction /></PrivateRoute>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);