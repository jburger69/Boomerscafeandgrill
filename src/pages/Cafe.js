import ImageGallery from "react-image-gallery";
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
      <h1>Boomers Cafe</h1>
      <h4>
        After 2 years at his current location, Chef Joe has moved the Baby Boomers Dining Room, and the Dining Experience, to within Boomers Cafe and Grill.
        We are transforming the space in our new dining room into the same quality experience you know and expect. Chef Joe and Chef Steve, will be
        preparing the same dinners and special's that our customers appreciate.
      </h4>
      <h1>Cafe Menu</h1>
      <div>
        <h2>Appetizers</h2>
        <h4>Stuffed Clams</h4>
        <h4>Bruschetta</h4>
        <h4>Arancini</h4>
        <h4>Mussels & Clams Fra Diavolo</h4>
        <h4>Friend Calamari</h4>
        <h4>Chicken Wings</h4>
        <h5>12 Jumbo Wings, choice of Sweet, Hot, Mild, Teriyaki, Garlic Parm</h5>
      </div>
      <div>
        <h2>Entrees</h2>
        <h5>Served with Soup or Salad</h5>
        <h4>Cheese Ravioli</h4>
        <h5>With marinara or Vodka Sauce</h5>
        <h4>Shrimp Scampi Pasta</h4>
        <h5>Sauteed Garlic, Lemon, White Wine, Shrimp Stock and Butter</h5>
        <h4>Shrimp & Broccoli Pasta</h4>
        <h5>Sauteed Shrimp, with Broccoli, Garlic & Oil, over Fusilli Pasta</h5>
        <h4>Fettucine Alfredo</h4>
        <h5>with Chicken/Add 5 | with Shrimp/Add 10</h5>
        <h4>Seafood Pescatore</h4>
        <h5>Sauteed Shrimp, Calamari, Clams and Mussels, in a Seafood Marinara Sauce over Linguini Pasta</h5>
        <h4>Rigatoni A La Vodka</h4>
        <h5>Rigatoni with Onions, Sage, and Prosciutto, in a Creamy Filetto Sauce with Chicken or Sausage/Add 5 | with Shrimp/Add 10</h5>
        <h4>Fusilli Misto</h4>
        <h5>Sauteed Chicken, Sundried Tomatoes, Spinach, Prosciutto, Garlic & Oil, with Fusilli Pasta</h5>
        <h4>Fusilli Bolagnese</h4>
        <h5>Ground Beef, Veal, and Pork Mix, Sauteed with Garlic, Shallots, Fresh Basil, with Marinara with a Touch of Cream with Fusilli Pasta</h5>
        <h4>Filet Bourguignon with Tagliatelle Pasta</h4>
        <h5>Filet Tips, with Red Wine, Shallots, Shiitake Mushrooms, with a brown Demi-glace, topped with Mascarpone Cheese over Tagliatelle Pasta</h5>
        <h4>Linguini with White or Red Clam Sauce</h4>
        <h5>With Fresh Clams</h5>
        <h4>Shrimp Infernale</h4>
        <h5>Sauteed Shrimp with Pepperoncini Peppers, Onions, Mushrooms, Garlic, and Creamy Blush Sauce, over Linguini... A Spicy Treat!</h5>
        <h4>Lobster Mac & Cheese [MP]</h4>
        <h5>Sauteed Lobster, with Shallots, in a Creamy Cheese Sauce and Pasta, topped with Fontine Cheese and Panko Breadcrumbs</h5>
        <h4>32 oz. Bone-in Ribeye Steak</h4>
        <h5>Served with Potato & Vegetable</h5>
        <h4>Breaded/Grilled Pork Chops, Guaranteed Tender</h4>
        <h5>Chops On the Bone (2)</h5>
        <h5>Double Chop, Stuffed with Fontina Cheese</h5>
        <h4>Chicken Parmigiana</h4>
        <h4>Veal Parmigiana</h4>
        <h4>Eggplant Parmigiana</h4>
      </div>
      <h3>Have a craving? If we have the ingredients, we'll make it!</h3>
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