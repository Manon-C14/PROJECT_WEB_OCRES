import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AjoutVoyage from "./contents/ListeVoyage";
import Dashboard from "./Dashboard";
import Voyage from "./contents/ModifsVoyage";


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
              <AjoutVoyage {...props} />
            )}
          />
          <div className="container mt-3">
                <Switch>
                    <Route
                        path="/modif"
                        render={(props) => (
                            <Voyage {...props} />
                        )}
                    />

                </Switch>
            </div>
        </Switch>
      </div>
    </div>
  );
}

export default App;