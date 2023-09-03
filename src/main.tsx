import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router-dom";
import {ErrorPage} from "./components/ErroPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>root <Outlet /></div>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>index</div>
      },
      {
        path: 'welcome',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <div>index</div>
          },
          {
            path: '1',
            element: (
                <div> 1 <NavLink to='/welcome/2'>下一页</NavLink> </div>
            )
          },
          {
            path: '2',
            element: (
                <div> 2 <NavLink to='/welcome/3'>下一页</NavLink> </div>
            )
          },
          {
            path: '3',
            element: (
                <div> 3 <NavLink to='/welcome/4'>下一页</NavLink> </div>
            )
          },
          {
            path: '4',
            element: (
                <div> 4 <NavLink to='/welcome/xxx'>下一页</NavLink> </div>
            )
          }
        ]
      }
    ]
  },
])

const div = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(div)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
