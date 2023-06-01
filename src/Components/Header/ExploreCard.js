import Place from "../../Images/canada.png";

const ExploreCard = ({data}) => {
  console.log("dararraa",data)
  return (
     <div className="ExploreCards">
      <img src={Place} alt="Image" className="explore_img" />
    <span>
    <p className="city_name" style={{margin:'0px'}}>Tokyo</p>
    <p className="order_num">18,2350 properties</p>
    <span className="Tag_number">15,603</span>
    </span>
      </div>

  );
};

export default ExploreCard;
