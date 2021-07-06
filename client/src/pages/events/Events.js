import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./events.css"

export default function Events() {
  return (
    <>
      <div className="homeContainer">
        <Leftbar name="events" />
        
        {/* temporary filler div */}
        <div className="temp-filler" ></div>

        <Rightbar/>
      </div>
    </>
  );
}
