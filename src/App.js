import logo from './logo.svg';
import './App.scss';
import Home from './components/Home.js';
import AddNewProduct from './components/AddNewProduct.js';
import Product from './components/Products/Product.js';
function App() {
  return (
    <div className="App">
      <header className="App-header-content-left">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
      </header>
      <div className='content-right'>
        <AddNewProduct />
        <hr />
        <Product />
      </div>
    </div>
  );
}

export default App;
