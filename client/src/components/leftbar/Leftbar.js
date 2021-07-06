import "./leftbar.css";

import { Link } from "react-router-dom";


export default function Leftbar(props) {

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <Link class="link" to="/">
        <h1>growr</h1>
      </Link>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}
