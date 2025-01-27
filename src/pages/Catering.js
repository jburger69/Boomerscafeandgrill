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
      <h1 class="catering">Boomers Grill & Cafe now has Catering!</h1>
      <h2 className="h4_change">Full Banquet Menu Available</h2>
      <br></br>
      <h2 className="h4_change">Book Your Holiday Party Today</h2>
      <br></br>
      <h3 className="h5_change">Halloween Party</h3>
      <h3 className="h5_change">Thanksgiving Party</h3>
      <h3 className="h5_change">Christmas Party</h3>
      <h3 className="h5_change">Birthday Party</h3>
      <br></br>
      <h2 className="h4_change">We also do wedding's for parties of 75 or less</h2>
      <br></br>
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