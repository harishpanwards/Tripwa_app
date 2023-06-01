import './/Stylesheet.css';
import DiscoveryCards from './DiscoveryCards'
import ExploreCard from './ExploreCard';

const Explore = () => {
  let arr=[
    {image: 'user'},
    {image: 'user'},
    {image: 'user'},
    {image: 'user'},
    {image: 'user'},
    {image: 'user'},
    {image: 'user'},
    {image: 'user'},
  ]
  return (
    <div
      className="Discovery_card Explore"
    >
    <div className="container">
    <div className='row section_header'>
      <div className='section_title'>
        <h2 className='section_title'>Explore nearby</h2>
        <p className='section_dis'>Popular places to recommends for you</p>
      </div>
      <div className='section_target'>
       <p>Explore More +</p>
      </div>
    </div>
    <div className="row">
{arr.map((item)=>{
  return <ExploreCard data={item} />

})}
      
    
    </div>
    </div>
    </div>
  );
};

export default Explore;
