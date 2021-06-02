import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeftDrawer from "./components/LeftDrawer";
import routes from "./routes";

function App() {
  return (
    <Router>
      <LeftDrawer>
        <Switch>
          {routes.map((route, key) => {
            return (
              <Route
                exact
                path={route.path}
                component={route.component}
                key={key}
              />
            );
          })}
        </Switch>
      </LeftDrawer>
    </Router>
  );
}

export default App;
