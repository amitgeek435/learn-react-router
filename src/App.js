// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import Error from "./components/Error";
import { Route, Switch, Redirect } from "react-router-dom";
import NavbarMenu from "./components/Navbar";

function App() {
  const Name = () => {
    return <h1 className="text-center">Name Page</h1>;
  };
  return (
    <>
      <NavbarMenu />
      <div className="container">
        <h1 className="text-center text-success text-capitalize shadow my-2">
          hello world!
        </h1>
        {/* <Routes>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/contact/name" component={Name} />
          <Route component={Error} />
        </Routes> */}
        <Switch>
          <Route exact path="/" render={() => <About name="About" />} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/user/:fname/:lname" component={User} />
          <Route path="/user/:fname" component={User} />
          <Route path="/user" component={User} />
          <Route exact path="/contact/name" component={Name} />
          <Route component={Error} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </>
  );
}

export default App;
