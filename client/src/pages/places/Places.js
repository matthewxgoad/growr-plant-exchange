import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./places.css"

export default function Places() {
  return (
    <>
      <div className="homeContainer">
        <Leftbar name="places" />
        
        {/* temporary filler div */}
        <div className="temp-filler" ></div>

        <Rightbar/>
      </div>
    </>
  );
}
