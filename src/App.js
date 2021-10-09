
import './App.css';
import Header from './components/HEADER/Header';
import Shop from './components/SHOP/Shop';
import Reveiw from './components/REVEIW/Reveiw';
import Inventory from './components/INVENTORY/Inventory';
import Error from './components/ERROR/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from './components/PRODUCT_DETAIL/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/reveiw">
            <Reveiw></Reveiw>
          </Route>
          <Route path="/manage">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
