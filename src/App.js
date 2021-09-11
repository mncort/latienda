import './App.css';
import Menu from './components/menu/Menu';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { CartContext } from './components/context/CartContext'
import {useState} from 'react'

function App() {



  return (
    <div className="App">

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
              <h2>Proximamente</h2>
            </Route>
            <Route path="*">
              <Redirect to="/"/>

            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
