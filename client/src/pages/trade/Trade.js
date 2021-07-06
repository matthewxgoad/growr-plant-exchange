import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./trade.css"

export default function Trade() {
  return (
    <>
      <div className="homeContainer">
        <Leftbar name="trade" />
        
        {/* temporary filler div */}
        <div className="temp-filler" ></div>

        <Rightbar/>
      </div>
    </>
  );
}
