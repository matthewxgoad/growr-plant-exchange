import NavBar from "../../components/NavBar";
import AboutCard from "../../components/AboutCard";
import "./About.css";

export default function About(props) {
  return (
    <>
      <NavBar page="about" />
      <AboutCard />
    </>
  );
}
