import "./App.css";

import AddNewPatron from "./pages/AddNewPatron";
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
  );
}

export default App;
