import './/Stylesheet.css';
import GuestsCards from './GuestsCards'

const Guests = () => {
  return (
    <div
      className="Guests_Cards"
    >
    <div className="container">
    <div className='row section_header'>
      <div className='section_title'>
        <h2 className='section_title'>Homes guests love</h2>
        <p className='section_dis'>Popular places to recommends for you</p>
      </div>
      <div className='section_target'>
       <p>Explore More +</p>
      </div>
    </div>
     <div className="row">

       <GuestsCards />
       <GuestsCards />
       <GuestsCards />
       <GuestsCards />
    
    </div>
    </div>
    </div>
  );
};

export default Guests;
