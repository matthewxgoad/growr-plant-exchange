import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./inbox.css"

export default function Inbox() {
  return (
    <>
      <div className="homeContainer">
        <Leftbar name="inbox" />
       
          {/* temporary filler div */}
          <div className="temp-filler" ></div>

        <Rightbar/>
      </div>
    </>
  );
}
