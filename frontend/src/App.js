import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Search from "./components/Search/Search";
import Featured from "./components/Featured/Featured";
import NewStyles from "./components/NewStyles/NewStyles";
import Footer from "./components/Footer/Footer";
import OrderForm from "./components/OrderForm/OrderForm";
import MenuPage from "./components/Menu/MenuPage/MenuPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import * as sessionActions from "./store/session";

function App() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <Header open={open} setOpen={setOpen} />
        <MenuPage open={open} setOpen={setOpen} />
        <Switch>
          <Route exact path="/">
            <Welcome />
            <Search />
            <Featured />
            <NewStyles />
            <Footer />
          </Route>
          <Route exact path="/order">
            <OrderForm />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </>
    )
  );
}

export default App;
