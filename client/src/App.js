import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import PDrawer from "./components/PDrawer";
import AddNewPatron from "./pages/AddNewPatron";
import Patrons from "./pages/Patrons";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <PDrawer
          children={
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/patron/new" component={AddNewPatron} />
              <Route exact path="/patron" component={Patrons} />
            </Switch>
          }
        />
      </div>
    </Router>
  );
}

export default App;
