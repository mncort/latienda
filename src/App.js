import './App.css';
import Menu from './components/menu/Menu';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Menu/>
      <ItemListContainer saludo={"Item List Container"}/>
    </div>
  );
}

export default App;
