import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import PDrawer from "./components/PDrawer";
import AddNewPatron from "./pages/AddNewPatron";
<<<<<<< HEAD
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
=======
import AddNewUser from "./pages/AddNewUser";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddNewPatron />
      <br />
      <hr />
      <AddNewUser />
    </div>
>>>>>>> 9942a22c54f1e94bfda560bc589b703538451de6
  );
}

export default App;
