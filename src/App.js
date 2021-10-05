
import React from 'react';
import "./App.css"
import Dogs from "./Dogs"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>


      <div className="App">
        <h1>My Dogs Imgs</h1>

      </div>

      <Switch>
        <Route exact path="/dogs" component={Dogs} />
        <Route path="/dogs/:name" component={Dogs} />
      </Switch>
    </Router>
  );
}


export default App;