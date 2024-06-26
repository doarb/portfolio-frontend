import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Root, {loader as loaderRoot} from "./routes/root";
import SignIn, {action as signinAction} from "./routes/signin";
import About from './routes/about';
import Projects, {loader as projectsLoader} from './routes/projects';
import Project, {loader as projectLoader} from './routes/project';
import { action as destroyAction } from './routes/destroy';
import Editproject,{ action as editprojectAction } from './routes/editproject';
import Createproject,{ action as createprojectAction} from './routes/CreateProject';
import Admin, {loader as adminloader} from './routes/Admin';
import { action as SignOutAction } from './routes/SignOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loaderRoot,


    errorElement: <ErrorPage />,
    children: [
      {
        
        path: "/signin",
        element: <SignIn />,
        action: signinAction,

        errorElement: <ErrorPage />,
      },
      {
        path: "/",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects",
        element: <Projects />,
        loader: projectsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects/:projectId",
        element: <Project />,
        loader: projectLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects/:projectId/edit",
        element: <Editproject />,
        loader: projectLoader,
        action: editprojectAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects/:projectId/destroy",
        action: destroyAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects/new",
        element: <Createproject />,
        action: createprojectAction,
        errorElement: <ErrorPage />,

      },
      {
        path: "/admin",
        element: <Admin />,
        loader: adminloader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/signout",
        action: SignOutAction,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
