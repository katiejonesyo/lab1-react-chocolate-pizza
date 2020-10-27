import './App.css';
import header from './assets/head.png';
import pizza from './assets/choco-pizza.png';
import listbg from './assets/list-bg.png';
import greyline from './assets/horizontal-grey-line.png';
import footerfork from './assets/logo.png'
import MyAmazingList from './MyAmazingList';


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
        <ul className="ingredient-list">
          <MyAmazingList ingredient="1 1/2 cups milk" />
          <MyAmazingList ingredient="1/2 cup mascarpone" />
          <MyAmazingList ingredient="1/2 tsp pink salt" />
          <MyAmazingList ingredient="1 lb Black Mission Figs" />
          <MyAmazingList ingredient="1/2 cup brown sugar" />
          <MyAmazingList ingredient="2-4 tbsp water" />
          <MyAmazingList ingredient="1 1/2 cups heavy cream" />
          <MyAmazingList ingredient="1/3 granulated suga" />
          <MyAmazingList ingredient="2 egg yolks" />
          <MyAmazingList ingredient="1 lemon, juiced" />
          <MyAmazingList ingredient="2 tbsp butter" />
          <MyAmazingList ingredient="1 cup honey roasted pecans, roughly chopped" />
        </ul>
        <img src={greyline} className="greyline" alt="greyline" />
      </body>
      <footer>
        <hr /><img src={footerfork} className="footerfork" alt="footerfork" /><hr />
        <p>Delicious copyright stuff</p>
&copy; 2020 Alchemy Code Lab
    </footer>
    </div>

  );
}

export default App;
