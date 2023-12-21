import { useParams} from "react-router-dom"
const GalleryView = ({galleries}) => {
    const { galleryID } = useParams()

    const selected = galleries.find((gallery) => gallery.id === galleryId);

    if (!selectedGalelry) {
        return <Navigate tp="/" />
    }

    return (
        <div>
        <h1>Gallery View</h1>
        <h2>{selectedGallery ? selectedGallery.name : 'Gallery Not Found'}</h2>
        </div>
    )
}


export default GalleryView