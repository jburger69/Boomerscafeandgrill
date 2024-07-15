import ImageGallery from "react-image-gallery";
// import Image from "../images/image000000.JPG";
// import Image_1 from "../images/IMG_1178.PNG";
import Image_2 from "../images/rsz_1img_1178.png";
import Image_two from "../images/cr=w_600,h_300.webp";
import Image_three from "../images/rs=w_600,h_300,cg_true.webp";
import Image_four from "../images/360_F_259311106_Gw1RR6YMiV1Ev3sYAe0eDYPkz697pKYv.jpg";
import Image_five from "../images/image000000 2.jpg";
import Image_six from "../images/image000000 3.jpg";
import Image_seven from "../images/image000000 copy.jpg";
import Image_eight from "../images/441331488_10230280905915525_6622483226008671594_n.jpg";
import Image_nine from "../images/IMG_1171.JPG";
import Image_ten from "../images/IMG_1172.JPG";
import Image_eleven from "../images/IMG_1173.JPG";
import Image_twelve from "../images/IMG_1174.JPG";


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
  {
    original: Image_nine,
    thumbnail: Image_nine,
  },
  {
    original: Image_ten,
    thumbnail: Image_ten,
  },
  {
    original: Image_eleven,
    thumbnail: Image_eleven,
  },
  {
    original: Image_twelve,
    thumbnail: Image_twelve,
  },
  
];


const Home = () => {
    return <>
    <div className="main_div">
      <Container>
        <Row>
         <Col sm={8}><img className="image" src={Image_2} alt="Boomers Cafe & Grill Logo"/></Col>
         <Col sm={4}><h2 className="main_text">Welcome to Boomers Cafe & Grill</h2>
         <h5 id="h5" className="main_text">Relax and indulge in our delicious drinks, food and appetizers at Boomers Cafe & Grill. We have two sides combined in one space! Try out our cafe or our grill. Both will melt your tastebuds!</h5>
         {/* <Button onclick="location.href = https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" id="button"className="main_button" variant="warning">Follow US</Button> */}
         </Col>
        </Row>
      </Container>
    </div>
    <h1 className="h1_home">About Boomers Cafe & Grill</h1>
    <div className="about_div">
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
          <Col><h3 className="about_name">Our vision</h3></Col>
          <Col><h3 className="about_name">Our Chef</h3></Col>
        </Row>
      </Container>
    </div>
    <div className="about_text">
      <Container>
        <Row>
          <Col><p>Our goal is to provide a welcoming and inclusive space for everyone to enjoy delicious food and drinks.
            We believe in using fresh, locally-sourced ingredients and supporting our community in every way we can.</p></Col>
          <Col><p>Chef Joe of Baby Boomers Cafe has years of experience in the restaurant industry and a passion for creating unique and flavorful dishes. He puts his heart and soul into every meal he prepares, and it shows in the rave reviews from our customers.</p></Col>
        </Row>
      </Container>
    </div>
    <div className="happy_div">
      <img className="happy_hour_image" src={Image_four} />
      <div className="happy_hour_text">
        <h1 className="h1_home">Happy Hour</h1>
        <h4>Stop by Boomers Cafe & Grill between 4pm and 6pm for our happy hour specials.<br></br> Enjoy discounted drinks and burgers and catch up with friends over a cold beer or cocktail.</h4>
        <h4>Coors Light, Miller Lite, and Yuengling for $3 Tito's or Malibu Mixed Drinks $4</h4>
        <h4>15% off all Burgers</h4>
      </div>
    </div>
    <h1 className="h1_home">Boomers Grill Gallery</h1>
    <ImageGallery 
      items={images}
      original={true}
      showIndex={true}
      showFullscreenButton={true}
      showPlayButton={false}
      />;
      <div className="contact_div">
        <h1 className="h1_home">Contact US</h1>
        <Container>
          <Row>
            <Col>
              <div className="contact_text">
                <h2>Don't Just Read About Us</h2>
                <h4>Get on down and see why our cafe and grill is where you chill!</h4>
                <br></br>
                <br></br>
                <h2>Boomers Cafe and Grill</h2>
                <h4>2624 PA-534 Albrightsville PA 18210</h4>
                <h4>570-215-7091</h4>
              </div>
            </Col>
            <Col>
              <div className="contact_text">
                <h2>Hours</h2>
                <h4>Monday - Closed</h4>
                <h4>Tuesday - 12:00 pm - 8:00 pm</h4>
                <h4>Wensday - 12:00 pm - 10:00 pm</h4>
                <h4>Thursday - 12:00 pm - 10:00 pm</h4>
                <h4>Friday - 12:00 pm - 10:00 pm</h4>
                <h4>Saturday - 12:00 pm - 10:00 pm</h4>
                <h4>Sunday(Brunch) - 8:00 am - 3:00 pm</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="follow_us_link">
        <h1 className="h1_home">Follow Us to keep up to date with menus, drinks, and events!</h1>
        <a href="https://www.facebook.com/profile.php?id=61562298807419" class="fa fa-facebook"></a>
      </div>
    </>
  };

export default Home;