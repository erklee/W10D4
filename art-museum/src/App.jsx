import { RouterProvider, createBrowserRouter } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from './components/GalleryNavigation';

function App() {
  return <RouterProvider router={router}/>;

}

// console.log(harvardArt)

const router = createBrowserRouter([
  {
    path: '*', element: <h2>Page Not Found</h2>
  },
  { path: '/galleries', element: <GalleryNavigation galleries={harvardArt.records}/>},
  {
    path: "/", 
    element: 
      <>
        <h2>Harvard Art Museum</h2>
      </>
  }

])






export default App;
