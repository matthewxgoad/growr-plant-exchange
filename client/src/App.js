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

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import "./App.css";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {<Root />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/profile" /> : <Login />}
        </Route>
        <Route path="/signup">
          {user ? <Redirect to="/profile" /> : <SignUp />}
        </Route>
        <Route exact path="/about">
          {<About />}
        </Route>
        <Route exact path="/add">
          {user ? <Add /> : <SignUp />}
        </Route>
        <Route exact path="/trade">
          {user ? <Trade /> : <SignUp />}
        </Route>
        <Route exact path="/events">
          {user ? <Events /> : <SignUp />}
        </Route>
        <Route exact path="/places">
          {user ? <Places /> : <SignUp />}
        </Route>
        <Route exact path="/profile">
          {user ? <Profile /> : <SignUp />}
          {<Profile />}
        </Route>
        <Route exact path="/profile/:username">
          {/* {user ? <Profile /> : <SignUp />} */}
        </Route>
        <Route path="/inbox">
          {user ? <Inbox /> : <SignUp />}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
