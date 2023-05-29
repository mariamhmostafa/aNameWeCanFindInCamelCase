import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Service from "views/examples/Service.js";
import AboutUs from "views/examples/AboutUs.js";
import Client from "views/examples/Client.js";
import Admin from "views/examples/Admin.js";
import Banker from "views/examples/Banker.js";
import TechnicalIssue from "views/examples/TechnicalIssue.js";
import Home from "views/examples/Home.js";
import VisuallyImpaired from "views/examples/VisuallyImpaired.js"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={(props) => <Landing {...props} />}
      />
      <Route
        path="/login-page"
        exact
        render={(props) => <Login {...props} />}
      />
      <Route
        path="/profile-page"
        exact
        render={(props) => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={(props) => <Register {...props} />}
      />
      <Route
        path="/service-page"
        exact
        render={(props) => <Service {...props} />}
      />
      <Route
        path="/aboutus-page"
        exact
        render={(props) => <AboutUs {...props} />}
      />
      <Route
        path="/client-page"
        exact
        render={(props) => <Client {...props} />}
      />
      <Route
        path="/banker-page"
        exact
        render={(props) => <Banker {...props} />}
      />
      <Route
        path="/technical-issue-page"
        exact
        render={(props) => <TechnicalIssue {...props} />}
      />
      <Route
        path="/admin-page"
        exact
        render={(props) => <Admin {...props} />}
      />
      <Route
        path="/visually-impaired-page"
        exact
        render={(props) => <VisuallyImpaired {...props} />}
      />


      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
