import { images } from "./Images.js"
import ImageGallery from 'react-image-gallery';

export default function ImageSlider(){

    return(
        <ImageGallery
                items={images}
                autoPlay={true}
                showBullets={true}
                showNav={false}
                showThumbnails={false}
                showPlayButton={false}
                slideInterval={6000}
                showFullscreenButton = {false}
              />
    )
}