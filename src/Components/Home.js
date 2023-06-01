import { useNavigate } from "react-router-dom";
import Header from "./Header/HeaderNavBar";
import Background from "./Header/Background";
import Service from "./Header/Service";
import Discovery from "./Header/Discovery";
import Explore from "./Header/Explore";
import Skiplagged from "./Header/Skiplagged";
import Footer from "./Footer";
import Guests from "./Header/Guests";
import About from "./About";

function Home() {
  const navigate = useNavigate();
  const navItems = [
    {
      id: 1,
      name: "Flights",
      onclick: () => navigate("/flights"),
    },
    { id: 2, name: "Stays", onclick: () => navigate("/stays") },
    { id: 3, name: "Cars", onclick: () => navigate("/cars") },
    { id: 4, name: "Visit", onclick: () => navigate("/visit") },
    {
      id: 5,
      name: "Plan my Trip",
      onclick: () => navigate("/plan-my-trip"),
    },
    {
      id: 6,
      name: "Packaged Details",
      onclick: () => navigate("/package-details"),
    },
  ];
  return (
    <div>
      <Header backgroundImage={""} navigationData={navItems} />
      <Background/>
      <Service />
      <Discovery />
      <Guests />
      <Explore />
      <Skiplagged />
 
    </div>
  );
}

export default Home;
