import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Payment from "./Payment";

import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51IjCRLJUasgdv8gzHd3m8tWwQbSkK0hwPOlN8Johq3vw5ZsLkxRMuW8C8eu6uIWqz2qkBmYnO7HzlBLA4tYUxkF600wSuZW7Td"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //fire when login
    auth.onAuthStateChanged((authUser) => {
      console.log("AUTH USER: ", authUser);

      if (authUser) {
        //logged user
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out user
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
