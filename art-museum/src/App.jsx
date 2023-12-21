import { RouterProvider, createBrowserRouter } from "react-router-dom";
import harvardArt from "./data/harvardArt";

function App() {
  return <RouterProvider router={router}/>;
}

console.log(harvardArt)

const router = createBrowserRouter([
  {
    path: '*', element: <h2>Page Not Found</h2>
  }
])



export default App;