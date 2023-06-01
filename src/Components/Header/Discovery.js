import './/Stylesheet.css';
import DiscoveryCards from './DiscoveryCards'

const Discovery = () => {
  return (
    <div
      className="Discovery_card"
    >
    <div className="container">
    <div className='row section_header'>
      <div className='section_title'>
        <h2 className='section_title'>Suggestions for discovery</h2>
        <p className='section_dis'>Popular places to recommends for you</p>
      </div>
      <div className='section_target'>
       <p>Explore More +</p>
      </div>
    </div>
    <div className="row">

       <DiscoveryCards />
       <DiscoveryCards />
       <DiscoveryCards />
       <DiscoveryCards />
       <DiscoveryCards />
    
    </div>
    </div>
    </div>
  );
};

export default Discovery;
