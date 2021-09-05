import './App.css';
import Menu from './components/menu/Menu';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { CartContext } from './components/context/CartContext'
import {useState} from 'react'

function App() {

  const [carrito, setCarrito] = useState([])

  const addItem = (item, cant) => {
    setCarrito([
        ...carrito,
        {
            ...item, cantidad: cant
        }
    ])
  }
  const clearCarrito = () =>{
    setCarrito([])
  }
  const isInCarrito = (id) => { 
    return carrito.find(item => item.id === id) ? true : false
  }


  return (
    <div className="App">

      <CartContext.Provider value={{carrito, addItem, isInCarrito}}>
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
      </CartContext.Provider>
    </div>
  );
}

export default App;
