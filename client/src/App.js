import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./util/context/AuthContext";
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
import "./App.css";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {<Root />}
        </Route>
        {/* conditional rendering to redirect to login or signup page if not logged in */}
        <Route path="/login">
          {user ? <Redirect to="/profiles" /> : <Login />}
        </Route>
        <Route path="/signup">
          {user ? <Redirect to="/profiles" /> : <SignUp />}
        </Route>
        <Route exact path="/about">
          {<About />}
        </Route>
        <Route exact path="/add">
          {user ? <Add /> : <Login />}
        </Route>
        <Route exact path="/trade">
          {user ? <Trade /> : <Login />}
        </Route>
        <Route exact path="/events">
          {user ? <Events /> : <Login />}
        </Route>
        <Route exact path="/places">
          {user ? <Places /> : <Login />}
        </Route>
        {/* Conditional render for logged in user profile or other user profile */}
        <Route path="/profiles">
          {user ? <Profile /> : <Login />}
        </Route>
        <Route path="/profiles/:otherUserId" >
          {user ? <Profile /> : <Login />}
        </Route>
        <Route path="/inbox">
          {user ? <Inbox /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
