import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./about.css"

export default function About() {
  return (
    <>
      <div className="homeContainer">
        <Leftbar name="about" />

          {/* temporary filler div */}
          <div className="temp-filler" ></div>

        <Rightbar/>
      </div>
    </>
  );
}
