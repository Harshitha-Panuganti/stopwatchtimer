import React from "react";
//we are using react-router-dom package to switch between stopwath <-> timer
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./App.css";
import Header from "./components/common/header/Header";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Stopwatch} />
            <Route path="/timer" component={Timer} />
          </Switch>
        </div>
      </Router>
    </div>
    </>
  );
}

export default App;