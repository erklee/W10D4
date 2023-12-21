import { RouterProvider, createBrowserRouter } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from './components/GalleryNavigation';
import {Outlet} from 'react-router-dom'
import GalleryView from "./components/GalleryView";

function App() {
  return <RouterProvider router={router}/>;

}

// console.log(harvardArt)

const router = createBrowserRouter([
  {
    path: '*', element: <h2>Page Not Found</h2>
  },
  // { path: '/galleries', element: <GalleryNavigation galleries={harvardArt.records}/>},

  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element:
        <>
        <h2>Harvard Art Museum</h2>
      </>
      }
    ]
  },
  {
    path: '/galleries/:galleryID',
    element: <GalleryView/>
  }

])

function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}








export default App;
