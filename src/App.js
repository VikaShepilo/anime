//import logo from './logo.svg';

import './App.css'
import { HomePage } from './HomePage'
import Card from './Card'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/card" component={Card}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
