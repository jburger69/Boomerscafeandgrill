import ImageGallery from "react-image-gallery";
import "../cafe.css";
import Photo_one from "../images/cafe 1.webp";
import Photo_two from "../images/cafe 2.webp";
import Photo_three from "../images/cafe 3.webp";
import Photo_four from "../images/cafe 4.webp";
import Photo_five from "../images/cafe 5.webp";
import Photo_six from "../images/cafe 6.webp";
import Photo_seven from "../images/cafe 7.webp";
import Photo_eight from "../images/cafe 8.webp";
import Photo_nine from "../images/cafe 9.webp";

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
  {
    original: Photo_seven,
    thumbnail: Photo_seven,
  },
  {
    original: Photo_eight,
    thumbnail: Photo_eight,
  },
  {
    original: Photo_nine,
    thumbnail: Photo_nine,
  },
  
];

const Cafe = () => {
    return <>
      <h1 class="color_change">Boomers Cafe</h1>
      <h5 class="h5_text">
        After 2 years at his current location, Chef Joe has moved the Baby Boomers Dining Room, and the Dining Experience, to within Boomers Cafe and Grill.
        We are transforming the space in our new dining room into the same quality experience you know and expect. Chef Joe and Chef Steve, will be
        preparing the same dinners and special's that our customers appreciate.
      </h5>
      <h1 class="color_change">Cafe Menu</h1>
      <br></br>
      <div>
        <h2 class="color_change">Appetizers</h2>
        <br></br>
        <h4 class="h4_change">Stuffed Clams</h4>
        <br></br>
        <h4 class="h4_change">Bruschetta</h4>
        <br></br>
        <h4 class="h4_change">Arancini</h4>
        <br></br>
        <h4 class="h4_change">Mussels & Clams Fra Diavolo</h4>
        <br></br>
        <h4 class="h4_change">Friend Calamari</h4>
        <br></br>
        <h4 class="h4_change">Chicken Wings</h4>
        <h5 class="h5_change">12 Jumbo Wings, choice of Sweet, Hot, Mild, Teriyaki, Garlic Parm</h5>
        <br></br>
      </div>
      <div>
        <h2 class="color_change">Entrees</h2>
        <h5 class="h5_change">Served with Soup or Salad</h5>
        <br></br>
        <h4 class="h4_change">Cheese Ravioli</h4>
        <h5 class="h5_change">With marinara or Vodka Sauce</h5>
        <br></br>
        <h4 class="h4_change">Shrimp Scampi Pasta</h4>
        <h5 class="h5_change">Sauteed Garlic, Lemon, White Wine, Shrimp Stock and Butter</h5>
        <br></br>
        <h4 class="h4_change">Shrimp & Broccoli Pasta</h4>
        <h5 class="h5_change">Sauteed Shrimp, with Broccoli, Garlic & Oil, over Fusilli Pasta</h5>
        <br></br>
        <h4 class="h4_change">Fettucine Alfredo</h4>
        <h5 class="h5_change">with Chicken/Add 5 | with Shrimp/Add 10</h5>
        <br></br>
        <h4 class="h4_change">Seafood Pescatore</h4>
        <h5 class="h5_change">Sauteed Shrimp, Calamari, Clams and Mussels, in a Seafood Marinara Sauce over Linguini Pasta</h5>
        <br></br>
        <h4 class="h4_change">Rigatoni A La Vodka</h4>
        <h5 class="h5_change">Rigatoni with Onions, Sage, and Prosciutto, in a Creamy Filetto Sauce with Chicken or Sausage/Add 5 | with Shrimp/Add 10</h5>
        <br></br>
        <h4 class="h4_change">Fusilli Misto</h4>
        <h5 class="h5_change">Sauteed Chicken, Sundried Tomatoes, Spinach, Prosciutto, Garlic & Oil, with Fusilli Pasta</h5>
        <br></br>
        <h4 class="h4_change">Fusilli Bolagnese</h4>
        <h5 class="h5_change">Ground Beef, Veal, and Pork Mix, Sauteed with Garlic, Shallots, Fresh Basil, with Marinara with a Touch of Cream with Fusilli Pasta</h5>
        <br></br>
        <h4 class="h4_change">Filet Bourguignon with Tagliatelle Pasta</h4>
        <h5 class="h5_change">Filet Tips, with Red Wine, Shallots, Shiitake Mushrooms, with a brown Demi-glace, topped with Mascarpone Cheese over Tagliatelle Pasta</h5>
        <br></br>
        <h4 class="h4_change">Linguini with White or Red Clam Sauce</h4>
        <h5 class="h5_change">With Fresh Clams</h5>
        <br></br>
        <h4 class="h4_change">Shrimp Infernale</h4>
        <h5 class="h5_change">Sauteed Shrimp with Pepperoncini Peppers, Onions, Mushrooms, Garlic, and Creamy Blush Sauce, over Linguini... A Spicy Treat!</h5>
        <br></br>
        <h4 class="h4_change">Lobster Mac & Cheese [MP]</h4>
        <h5 class="h5_change">Sauteed Lobster, with Shallots, in a Creamy Cheese Sauce and Pasta, topped with Fontine Cheese and Panko Breadcrumbs</h5>
        <br></br>
        <h4 class="h4_change">32 oz. Bone-in Ribeye Steak</h4>
        <h5 class="h5_change">Served with Potato & Vegetable</h5>
        <br></br>
        <h4 class="h4_change">Breaded/Grilled Pork Chops, Guaranteed Tender</h4>
        <h5 class="h5_change">Chops On the Bone (2)</h5>
        <h5 class="h5_change">Double Chop, Stuffed with Fontina Cheese</h5>
        <br></br>
        <h4 class="h4_change">Chicken Parmigiana</h4>
        <br></br>
        <h4 class="h4_change">Veal Parmigiana</h4>
        <br></br>
        <h4 class="h4_change">Eggplant Parmigiana</h4>
        <br></br>
      </div>
      <h3 class="h4_change">Have a craving? If we have the ingredients, we'll make it!</h3>
      <br></br>
      <div>
        <ImageGallery 
          items={images}
          original={true}
          showIndex={true}
          showFullscreenButton={true}
          showPlayButton={false}
        />;
      </div>
    </>;
  };
  
export default Cafe;