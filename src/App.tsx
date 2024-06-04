import { Navigate, createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./views/Home"
import Detail from "./views/Detail"
import Favorite from "./views/Favorite"
import LoginView from "./views/LoginView"
import { useAppStore } from "./stores/useAppStore"


const ProtectedRoute = ({ element }) => {
  const { status } = useAppStore()
  console.log(status)
  return status ? element : <Navigate to="/login" />
}

const App = createBrowserRouter([
  {
    path: '/login',
    element: <LoginView />
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
