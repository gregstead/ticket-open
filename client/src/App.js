import "./App.css";

import AddNewPatron from "./pages/AddNewPatron";
import AddNewUser from "./pages/AddNewUser";

function App() {
  return (
    <div className="App">
      <AddNewPatron />
      <br />
      <hr />
      <AddNewUser />
    </div>
  );
}

export default App;
