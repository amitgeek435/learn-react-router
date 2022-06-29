// import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { Route, Switch } from "react-router-dom";

function App() {
  const Name = () => {
    return <h1 className="text-center">Name Page</h1>;
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center text-success text-capitalize shadow my-2">
          hello world!
        </h1>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/contact/name" component={Name} />
          <Route component={Error} />
        </Switch>
        {/* <About />
        <Contact /> */}
      </div>
    </>
  );
}

export default App;
