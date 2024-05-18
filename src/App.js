import logo from './logo.svg';
import './App.scss';
import Home from './components/Home.js';
import AddNewProduct from './components/AddNewProduct.js';
import Product from './components/Products/Product.js';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Nav from './components/Navigation/Nav.js';
import "./components/Navigation/Nav.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Weather from './components/Weather/Weather.js';
import OTP from "./components/Otp/OTP.js";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact={true}>
          <div className="App">
            <header className="App-header-content-left">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <Home />
            </header>
            <div className='content-right'>
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather-app">
          <Weather />
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="/about">
          <div> React</div>
        </Route>
        <Route path="*">
          <div>404 Not Found!</div>
        </Route>
      </Switch>

    </Router>
  )
}

export default App;
