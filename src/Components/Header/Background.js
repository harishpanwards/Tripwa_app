import Search from "../Header/SearchBar/index"
import './/Banner.css';

const Background = () => {
  return (
    <div
      className="background-image-div"
    >
    <div className="container">
     <div className="row">
      <h1>Sign In, Save Money</h1>
      <p>Save 10% or more at participating properties- just<br></br> look for blue Genius Label</p>
      <div className="search_box"> <Search /></div>
     </div>
    </div>
    </div>
  );
};

export default Background;
