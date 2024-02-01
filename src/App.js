import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Resume from "./Component/Resume";
import Projects from "./Component/Projects";
import Testimonials from "./Component/Testimonials";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/testimonials">
            <Testimonials />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
