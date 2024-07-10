import ImageGallery from "react-image-gallery";
import Photo_one from "../images/rs=w_370,cg_true (1).webp";
import Photo_two from "../images/rs=w_370,cg_true.webp";
import Photo_three from "../images/rs=w_370,cg_true,m.webp";
import Photo_four from "../images/rs=w_370,cg_true (4).webp";
import Photo_five from "../images/rs=w_370,cg_true (3).webp";
import Photo_six from "../images/rs=w_370,cg_true (2).webp";
import "../catering.css";

const images = [
  {
    original: Photo_one,
    thumbnail: Photo_one,
  },
  {
    original: Photo_two,
    thumbnail: Photo_two,
  },
  {
    original: Photo_three,
    thumbnail: Photo_three,
  },
  {
    original: Photo_four,
    thumbnail: Photo_four,
  },
  {
    original: Photo_five,
    thumbnail: Photo_five,
  },
  {
    original: Photo_six,
    thumbnail: Photo_six,
  },
  
];

const Catering = () => {
    return <>
      <h1 class="catering">Catering Comming Fall 2024!</h1>
      <ImageGallery 
      items={images}
      original={true}
      showIndex={true}
      showFullscreenButton={true}
      showPlayButton={false}
      />;
    </>
  };
  
export default Catering;