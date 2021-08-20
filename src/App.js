import './App.css';
import Menu from './components/menu/Menu';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <ItemListContainer saludo={"Item List Container"}/>
    </div>
  );
}

export default App;
