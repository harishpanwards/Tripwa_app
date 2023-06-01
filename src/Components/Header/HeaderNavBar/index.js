import { Link } from "react-router-dom";
import '../Styles/Header.css';
import Logo from '../../../Images/Tripwa.svg'

const HeaderNavBar = ({ navigationData }) => {
  return (
    <div className="Header">
    <div className=" container">
       <div className="row">
       <Link to={{ pathname: `/` }}>
        <div>
          <img id="logo" src={Logo} alt="Tripwa" />
        </div>
      </Link>
     <div className="menu_list">
     {navigationData.map((item) => {
      const { name, id, onclick } = item;
      return (
        <p key={id}  onClick={onclick}>
          {name}
        </p>
      );
    })}
     </div>
      <div className="button_group">
        <p>Login</p>
        <p>sign up</p>
      </div>
       </div>
    </div>
    </div>
  );
};
export default HeaderNavBar;
