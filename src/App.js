//import logo from './logo.svg';

import './App.css'
import { HomePage } from './HomePage'
import Card from './components/Card'
import AddingСharacter from './components/AddingСharacter'
import FixСharacter from './components/FixСharacte'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store/store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/card" component={Card}></Route>
            <Route exact path="/addingСharacter" component={AddingСharacter}></Route>
            <Route exact path="/fixСharacter" component={FixСharacter}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
