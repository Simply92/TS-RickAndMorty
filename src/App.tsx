import { Navigate, createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./views/Home"
import Detail from "./views/Detail"
import Favorite from "./views/Favorite"
import LoginView from "./views/LoginView"
import { useAppStore } from "./stores/useAppStore"
import { ReactNode } from "react"
import Register from "./views/Register"

interface ProtectedRouteProps {
  element: ReactNode
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { status } = useAppStore()
  return status ? element : <Navigate to="/" />
}

const App = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: <LoginView />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <ProtectedRoute element={<Home />} />
      },
      {
        path: 'detail/:id',
        element: <ProtectedRoute element={<Detail />} />
      },
      {
        path: 'favorites',
        element: <ProtectedRoute element={<Favorite />} />
      }
    ]
  },
])



export default App
