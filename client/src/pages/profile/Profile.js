import "./profile.css";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
 return (
    <>
      <div className="profile">
        <Leftbar name="profile"/>
        
        {/* temporary filler div */}
        <div className="temp-filler" ></div>

        <Rightbar/>
      </div>
    </>
  );
}
