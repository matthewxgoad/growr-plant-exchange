import Trade from "./pages/Trade";
import Events from "./pages/Events";
import Places from "./pages/Places";
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

import { useAuth0 } from '@auth0/auth0-react';

import "./App.css";

function App() {
  const { user } = useAuth0();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/profiles" /> : <Root />}
        </Route>
        <Route path="/signup">
          {user ? <Redirect to="/profiles" /> : <SignUp />}
        </Route>
        <Route exact path="/about">
          {<About />}
        </Route>
        <Route exact path="/add">
          {user ? <Add /> : <Root />}
        </Route>
        <Route exact path="/trade">
          {user ? <Trade /> : <Root />}
        </Route>
        <Route exact path="/events">
          {user ? <Events /> : <Root />}
        </Route>
        <Route exact path="/places">
          {user ? <Places /> : <Root />}
        </Route>
        <Route path="/profiles">
          {user ? <Profile /> : <Root />}
        </Route>
        <Route path="/profiles/:otherUserId" >
          {user ? <Profile /> : <Root />}
        </Route>
        <Route path="/inbox">
          {user ? <Inbox /> : <Root />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
