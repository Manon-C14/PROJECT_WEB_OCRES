import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Voyage from "./contents/ListeVoyage";
import Dashboard from "./Dashboard";
import ModifVoyage from "./contents/ModifsVoyage";
import AjoutVoyage from "./contents/AjoutVoyage"


function App() {

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-center">
        <a href="/dashboard" className="navbar-brand">
          Mon Dashboard
        </a>
        <div className="navbar-nav mr-auto">

          <li className="nav-item" >
            <Link to={"/voyages"} className="nav-link">
              Mon API
            </Link>

          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/dashboard"]} component={Dashboard} />
          <Route
            path="/voyages"
            render={(props) => (
              <Voyage {...props} />
            )}
          />

          <Route
            path="/modif"
            render={(props) => (
              <ModifVoyage {...props} />
            )}
          />
          <Route
            path="/ajout"
            render={(props) => (
              <AjoutVoyage {...props} />
            )}
          />


        </Switch>
      </div>
    </div>
  );
}

export default App;