import {createBrowserRouter} from 'react-router-dom'
import {ErrorPage} from '../components/ErroPage'
import React from 'react'
import {MainLayout} from '../layouts/MainLayout'
import {welcomeRoutes} from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      welcomeRoutes
    ]
  }
])