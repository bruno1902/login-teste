import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Wrapper from "../Component/Form";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Wrapper}>
            <Wrapper />
          </Route>
          <Route path="/" component={App}>
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}