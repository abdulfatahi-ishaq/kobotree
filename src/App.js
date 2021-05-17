import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  HOME,
  ABOUT,
  FAQ,
  HOWITWORKS,
  PRIVACY,
  TERMS,
  LOGIN,
  SIGNUP,
} from "./routes/routes";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/FAQ";
import HowItWorks from "./Pages/Howitworks";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={ABOUT} component={About} />
        <Route path={FAQ} component={Faq} />
        <Route path={HOWITWORKS} component={HowItWorks} />
        <Route path={PRIVACY} component={Privacy} />
        <Route path={TERMS} component={Terms} />
        <Route path={LOGIN} component={Login} />
        <Route path={SIGNUP} component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
