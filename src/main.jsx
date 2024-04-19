import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/Root";
import SignIn from "./routes/Signin";
import About from './routes/about';
import Projects, {loader as projectsLoader} from './routes/projects';
import Project, {loader as projectLoader} from './routes/project';
import { action as destroyAction } from './routes/destroy';
import Editproject,{ action as editprojectAction } from './routes/editproject';
import Createproject,{action as createprojectAction} from './routes/CreateProject';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,


    errorElement: <ErrorPage />,
    children: [
      {
        
        path: "/signin",
        element: <SignIn />,
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

      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
