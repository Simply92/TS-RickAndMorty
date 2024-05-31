import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./views/Home"

const App = createBrowserRouter([
  {
    path: '/home',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])



export default App
