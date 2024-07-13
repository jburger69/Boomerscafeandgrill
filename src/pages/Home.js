import ImageGallery from "react-image-gallery";
import Image from "../images/image000000.JPG";
import Image_two from "../images/cr=w_600,h_300.webp";
import Image_three from "../images/rs=w_600,h_300,cg_true.webp";
import Image_four from "../images/rs=w_1240,h_620,cg_true.webp";
import Image_five from "../images/image000000 2.jpg";
import Image_six from "../images/image000000 3.jpg";
import Image_seven from "../images/image000000 copy.jpg";
import Image_eight from "../images/441331488_10230280905915525_6622483226008671594_n.jpg";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import "../home.css";

const images = [
  {
    original: Image_five,
    thumbnail: Image_five,
  },
  {
    original: Image_six,
    thumbnail: Image_six,
  },
  {
    original: Image_seven,
    thumbnail: Image_seven,
  },
  {
    original: Image_eight,
    thumbnail: Image_eight,
  },
  
];


const Home = () => {
    return <>
    <div className="main_div">
      <Container>
        <Row>
         <Col sm={8}><img className="image" src={Image} alt="Boomers Cafe & Grill Logo"/></Col>
         <Col sm={4}><h2 className="main_text">Welcome to Boomers Cafe & Grill</h2>
         <h5 id="h5" className="main_text">Relax and indulge in our delicious drinks and appetizers at Boomers Cafe & Grill.</h5>
         <Button onclick="location.href = https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" id="button"className="main_text" variant="warning">Click to Follow US</Button>
         </Col>
        </Row>
      </Container>
    </div>
    <h1>About Boomers Cafe & Grill</h1>
    <div>
      <Container>
        <Row>
          <Col><img src={Image_two} className="image" alt="Boomers image" /></Col>
          <Col><img src={Image_three} className="image" alt="Boomers image" /></Col>
        </Row>
      </Container>
    </div>
    <div>
      <Container>
        <Row>
          <Col><h3>Our vision</h3></Col>
          <Col><h3>Our Chef</h3></Col>
        </Row>
      </Container>
    </div>
    <div>
      <Container>
        <Row>
          <Col><p>Our goal is to provide a welcoming and inclusive space for everyone to enjoy delicious food and drinks.
            We believe in using fresh, locally-sourced ingredients and supporting our community in every way we can. Stop by and enjoy live music Thursday, Friday and Saturday.</p></Col>
          <Col><p>Chef Joe of Baby Boomers Cafe has years of experience in the restaurant industry and a passion for creating unique and flavorful dishes. He puts his heart and soul into every meal he prepares, and it shows in the rave reviews from our customers.</p></Col>
        </Row>
      </Container>
    </div>
    <div className="happy_div">
      <img className="happy_hour_image" src={Image_four} />
      <p>Stop by Boomers Roadhouse and Cafe between 4pm and 6pm for our happy hour specials. Enjoy discounted drinks and burgers and catch up with friends over a cold beer or cocktail.</p>
      <p>Coors Light, Miller Lite, and Yuengling for $3 Tito's or Malibu Mixed Drinks $4</p>
      <p>15% off all Burgers</p>
    </div>
    <h1>Boomers Grill Gallery</h1>
    <ImageGallery 
      items={images}
      original={true}
      showIndex={true}
      showFullscreenButton={true}
      showPlayButton={false}
      />;
      <div className="contact_div">
        <h1>Contact US</h1>
      </div>
      <div>
        <h1>Social</h1>
      </div>
    </>
  };

export default Home;