import logo from './logo.svg';
import './App.scss';
import Home from './components/Home.js';
import AddNewProduct from './components/AddNewProduct.js';
import Product from './components/Products/Product.js';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Nav from './components/Products/Navigation/Nav.js';
import "./components/Products/Navigation/Nav.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about">
          <Product />
        </Route>
        <Route path="/users">
          {/* <Users /> */}
        </Route>
        <Route path="/">
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
      </Switch>

    </Router>
  )
}

export default App;
