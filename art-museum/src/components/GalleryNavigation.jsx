import { NavLink } from "react-router-dom"
import '../components/GalleryNavigation.css'

const GalleryNavigation = ({galleries}) => {
    // console.log(galleries)
    return (
        <nav>
            <h1>Galleries</h1>
        {galleries.map((gallery) => (
        <NavLink key={gallery.id} to={`/gallery/${gallery.id}`} className="active">
            {gallery.name}
        </NavLink>
        ))}
    </nav>
    )

}


export default GalleryNavigation