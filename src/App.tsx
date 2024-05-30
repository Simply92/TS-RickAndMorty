import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"

const App = createBrowserRouter([
  {
    path: '/home',
    element: <Layout />,
    children: [

    ]
  }
])



export default App
