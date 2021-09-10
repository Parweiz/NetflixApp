import React, {useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import "./App.css";

import FrontPage from "./Pages/FrontPage"
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./Components/Config/Firebase";

import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from "./Components/Store/UserSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,

        }));
      
      } else {
        dispatch(logout)
      }

      return unSubscribe;
      
    });

  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {!user ? (
          <FrontPage />
        ) : (
          <Switch>
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
