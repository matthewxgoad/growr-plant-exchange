import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./add.css"

export default function Add() {
  return (
    <>
      <div className="homeContainer">
        <Leftbar />

        {/* temporary filler div */}
        <div className="temp-filler" ></div>

        <Rightbar/>
      </div>
    </>
  );
}
