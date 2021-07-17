import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import routes from "./routes";
import DashboardLayout from "./components/DashboardLayout";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  id: null,
  email: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("id", JSON.stringify(action.payload.id));
      localStorage.setItem("email", JSON.stringify(action.payload.email));
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
        id: null,
        email: null,
      };
    default:
      return state;
  }
};
function App() {
  const [theme, setTheme] = useState({
    palette: {
      type: "light",
      primary: {
        main: "#14213D",
      },
      secondary: {
        main: "#FCA311",
      },
    },
  });
  const muiTheme = createMuiTheme(theme);

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <AuthContext.Provider value={{ state, dispatch }}>
        <Router basename="/index.html">
          {state.isAuthenticated ? (
            <DashboardLayout>
              <Switch>
                {routes.map((route) => {
                  return (
                    <Route path={route.path} component={route.component} />
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
    </MuiThemeProvider>
  );
}

export default App;
