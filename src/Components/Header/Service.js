import Search from "./SearchBar/index"
import './/Banner.css';
import './/Stylesheet.css';
import Plane from "../../Images/plane 1.png";
import Car from "../../Images/car.png";
import Hotel from "../../Images/hotel.png";
import Guide from "../../Images/guide.png";

const Service = () => {
  return (
    <div
      className="Service_block"
    >
    <div className="container">
    
     <div className="row">
     <div className="book-flight service_card">
      <img src={Plane} alt="Image" />
      <b><p>Book a flight</p></b>
      <p>We are extremely easy for you to approach and contact.</p>
      </div>

      <div className="book-car service_card">
      <img src={Car} alt="Image" />
      <b><p>Rent a Car</p></b>
      <p>We are extremely easy for you to approach and contact.</p>
      </div>

      <div className="book-hotel service_card">
      <img src={Hotel} alt="Image" />
      <b><p>Book a Hotel</p></b>
      <p>We are extremely easy for you to approach and contact.</p>
      </div>

      <div className="book-guide service_card">
      <img src={Guide} alt="Image" />
      <b><p>Book a tour guide</p></b>
      <p>We are extremely easy for you to approach and contact.</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Service;
