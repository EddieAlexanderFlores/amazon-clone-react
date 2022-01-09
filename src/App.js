import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/routes/home/Home";
import Checkout from "./components/routes/checkout/Checkout";
import Login from "./components/routes/login/Login";
import Register from "./components/routes/login/Register";
import { useStateValues } from "./components/store/StateProvider";
import { auth } from "./components/routes/login/firebase";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [, dispatch] = useStateValues();

  // Piece of code which runs based on a given condition. useEffect
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        //console.log("user signed in", authUser.displayName);
        dispatch({ type: "set_user", user: authUser.displayName });
      } else {
        // User is signed out
        //console.log("user signed out");
        dispatch({ type: "set_user", user: null });
      }
    });

    // No longer insterested in auth changes. remove function inside onAuthStateChanged.
    // in other words, stop checking for auth changes.
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<h1>There's Nothing Here</h1>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
