import Ticket from "../../src/Images/ticket booking.jpg";


const Tour = () => {
  return(
    <div>
    <div className="bg-image-div">
      <div className="container">
     <div className="row">
      <h1 style={{textAlign:'center'}}>Tour Guide</h1>
      <p>Save 10% or more at participating properties- just<br></br> look for blue Genius Label</p>
      </div>
      </div>
    </div>

<div className="ticket-booking">
    <div className="container">
     <div className="row">
      <div className="ticket-text">
      <h1>Ticket Booking</h1>
      <ul>
        <li>Look for flight tickets beforehand</li>
        <li>Enter your details on website</li>
        <li>Choose your stops</li>
        <li>Choose your seat</li>
        <li>Book your ticket</li>
        <li>Confirm your receipt</li>
        </ul>
      </div>
      <div className="ticket-image">
      <img src={Ticket} alt="booking" />
      </div>
      </div>
      </div>
      </div>

      <div className="ticket-booking">
    <div className="container">
     <div className="row">
      <div className="Hotel-text">
      <h1>Ticket Booking</h1>
      <ul>
        <li>Look for flight tickets beforehand</li>
        <li>Enter your details on website</li>
        <li>Choose your stops</li>
        <li>Choose your seat</li>
        <li>Book your ticket</li>
        <li>Confirm your receipt</li>
        </ul>
      </div>
      <div className="Hotel-image">
      <img src={Ticket} alt="booking" />
      </div>
      </div>
      </div>
      </div>

    </div>
  );
}

export default Tour;