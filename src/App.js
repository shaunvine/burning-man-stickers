import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopBtn from "./components/BackToTopBtn";
import {
  Home,
  SubmitSticker,
  SingleSticker,
  ThankYouSubmit,
  Error,
  Contact,
  About,
  Stickers,
} from "./pages";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/submit">
          <SubmitSticker />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/thankyou">
          <ThankYouSubmit />
        </Route>
        <Route exact path="/stickers">
          <Stickers />
        </Route>
        <Route path="/stickers/:id" children={<SingleSticker />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <BackToTopBtn />
      <Footer />
    </Router>
  );
}

export default App;
