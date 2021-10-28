import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from "./thems";
import Home from "../screens/home";
import Header from "../components/header";
import GlobalStyle from "./globalStyle";
import Manga from "../screens/manga";
import Scan from "../screens/scan";

  
  const Routes = () => {

    const [currentTheme, setCurrentTheme] = useState(lightTheme)

    useEffect(() => {
        const localTheme = localStorage.getItem("theme")
        if (localTheme === "ligthTheme") {
            setCurrentTheme(lightTheme)      
        }
        else {
            setCurrentTheme(darkTheme)
        }


    },[])

      return (
          <ThemeProvider theme={currentTheme}>
            <GlobalStyle/>
                <Router>
                    <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/:nom">
                            <Manga></Manga>
                        </Route>
                        <Route exact path="/:nom/:nombre">
                            <Scan></Scan>
                        </Route>
                        <Redirect to="/"></Redirect>
                    </Switch>
                </Router>
          </ThemeProvider>
      );
  };


/*
  function PrivateRoute({ children, ...rest }) {
    const isToken = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={({ location }) =>
      isToken? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />)
    
}*/
  
  export default Routes;