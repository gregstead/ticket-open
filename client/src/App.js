import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpSide from "./pages/Signup";
import Login from "./pages/Login";
import routes from "./routes";

import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  id: null,
  email: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // localStorage.setItem("user", JSON.stringify(action.payload.user));
      // localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload.id,
        email: action.payload.email,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
function App() {
  // const [authTokens, setAuthTokens] = useState({});
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div className="App">
        {!state.isAuthenticated ? <Login /> : <DashboardLayout />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
