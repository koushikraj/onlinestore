import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Details from "./components/Details";
import SigninScreen from "./components/SigninScreen";


function App() {
  return (
      <Provider store={store}>
    <Router >
      <Route component={Nav} />
      <Route path="/" exact component={Home}/>
      <Route path="/cart" exact component={Cart}/>
      <Route path="/signin" component={SigninScreen} />
      <Route path="/details/:id" exact component={Details}/>
    </Router>
      </Provider>
  );
}

export default App;
