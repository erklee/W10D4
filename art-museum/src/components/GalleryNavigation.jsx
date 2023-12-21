import { NavLink } from "react-router-dom"


const GalleryNavigation = ({galleries}) => {
    console.log(galleries)
    return (
        <div>
            <h1>Galleries</h1>
            <NavLink to={'/galleries'} />
        </div>
    )

}


export default GalleryNavigation