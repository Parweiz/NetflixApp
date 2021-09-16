import React, {useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./Components/Config/Firebase";

import HomeScreen from "./Pages/HomeScreen";
import FrontScreen from "./Pages/FrontScreen";
import ProfileScreen from "./Pages/ProfileScreen";
import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from "./Components/Store/UserSlice";

import "./App.css";

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
        dispatch(logout())
      }

      return unSubscribe;
      
    });

  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        {!user ? (
          <FrontScreen />
        ) : (
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/profile" component={ProfileScreen} />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
