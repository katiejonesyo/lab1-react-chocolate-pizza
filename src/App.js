import Chocolatepizza from './Chocolatepizza.js';
import './App.css';
import header from './assets/head.png';
import pizza from './assets/choco-pizza.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header} className="head" alt="head" />
        <h1>Chocolate Pizza</h1>
      </header>
      <img src={pizza} className="pizza" alt="pizza" />
    </div>
  );
}

export default App;
