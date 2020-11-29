import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Routes/Home";
import Stories from "./Components/Routes/Stories";
import Features from "./Components/Routes/Features";
import Pricing from "./Components/Routes/Pricing";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stories" exact component={Stories} />
          <Route path="/features" exact component={Features} />
          <Route path="/pricing" exact component={Pricing} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
