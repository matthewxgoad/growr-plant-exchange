import Trade from "./pages/Trade";
import Events from "./pages/Events";
import Places from "./pages/Places";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Inbox from "./pages/Inbox";
import Add from "./pages/Add";
import Root from "./pages/Root";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {<Root />}
        </Route>
        <Route path="/login">
          {/* {user ? <Redirect to="/profile" /> : <Login />} */}
          {<Login />}
        </Route>
        <Route path="/signup">
          {/* {user ? <Redirect to="/profile" /> : <SignUp />} */}
          {<SignUp />}
        </Route>
        <Route exact path="/about">
          {<About />}
        </Route>
        <Route exact path="/add">
          {/* {user ? <Add /> : <SignUp />} */}
          {<Add />}
        </Route>
        <Route exact path="/trade">
          {/* {user ? <Trade /> : <SignUp />} */}
          {<Trade />}
        </Route>
        <Route exact path="/events">
          {/* {user ? <Events /> : <SignUp />} */}
          {<Events />}
        </Route>
        <Route exact path="/places">
          {/* {user ? <Places /> : <SignUp />} */}
          {<Places />}
        </Route>
        <Route exact path="/profile">
          {/* {user ? <Profile /> : <SignUp />} */}
          {<Profile />}
        </Route>
        <Route exact path="/profile/:username">
          {/* {user ? <Profile /> : <SignUp />} */}
        </Route>
        <Route path="/inbox">
          {/* {user ? <Inbox /> : <SignUp />} */}
          {<Inbox />}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
