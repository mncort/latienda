import './App.css';
import Menu from './components/menu/Menu';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { CartContext } from './components/context/CartContext'
import { UserContext } from './components/context/UserContext'
import Cart from './components/cart/Cart';


function App() {

  return (
    <div className="App">

      <UserContext>
      <CartContext>
        <BrowserRouter>
          <Menu/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/categoria/:cat">
              <ItemListContainer/>
            </Route>
            <Route exact path="/producto/:productoId">
              <ItemDetailContainer/>
            </Route>
            <Route path="/carrito">
              <Cart value="Hola"/>
            </Route>
            <Route path="*">
              <Redirect to="/"/>

            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext>
      </UserContext>
    </div>
  );
}

export default App;
