import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import routes from "./routes";
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
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router>
        {state.isAuthenticated ? (
          <DashboardLayout>
            <Switch>
              {routes.map((route) => {
                return (
                  <Route exact path={route.path} component={route.component} />
                );
              })}
            </Switch>
          </DashboardLayout>
        ) : (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/*" component={SignUp} />
          </Switch>
        )}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
