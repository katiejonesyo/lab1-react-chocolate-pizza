//import Chocolatepizza from './Chocolatepizza.js';//
import './App.css';
import header from './assets/head.png';
import pizza from './assets/choco-pizza.png';
import listbg from './assets/list-bg.png';
import greyline from './assets/horizontal-grey-line.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header} className="head" alt="head" />
        <h1>Chocolate Pizza</h1>
        <h2>POSTED ON 15 DEC 2013 / DESSERTS</h2>
      </header>
      <img src={pizza} className="pizza" alt="pizza" />
      <body>
      <p>For the fig-swirl: Melt over medium heat in a saucepan. Add brown sugar and stir to dissolve. 
        Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat,
    stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
    </p>
    <p>Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until is completely dissolved
        and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the 
        fig mixture cooled.
    </p>
    <p>Using an ice cream machine, pour liquids into the frozen basin and process according to manufactuerer instructions, i.e.,
        let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts.
        Continue to process for +/- 10 minutes. Pour  semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least
        two hours before serving. 
    </p>
    <img src={listbg} className="list" alt="list" />
    </body>
    <footer>
    <img src={greyline} className="greyline" alt="greyline" />
    </footer>
    </div>
    
  );
}

export default App;
