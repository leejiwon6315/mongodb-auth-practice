import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/" component={RegisterPage} />
      </Switch>
    </Router>
  );
};

export default App;
