import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ErrorPage} from "./components/ErroPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>root</div>,
    errorElement: <ErrorPage />
  },
])

const div = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(div)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
