import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./views/Home"
import Detail from "./views/Detail"
import Favorite from "./views/Favorite"

const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: 'detail/:id',
        element: <Detail />
      },
      {
        path: 'favorites',
        element: <Favorite />
      }
    ]
  }
])



export default App
