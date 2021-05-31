import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PDrawer from "./components/PDrawer";
import AddNewPatron from "./pages/AddNewPatron";

function App() {
  return (
    <Router>
      <div>
        <PDrawer
          children={
            <Switch>
              <Route exact path="/patron" component={AddNewPatron} />
            </Switch>
          }
        />
      </div>
    </Router>
  );
}

export default App;
