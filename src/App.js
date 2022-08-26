
import './App.css';
import Chart from './components/Chart/Chart';
import Header from './components/Header/Header';
import Prices from './components/Prices/Prices';
import SpecialChart from './components/SpecialChart/SpecialChart';
import Spring from './components/Spring/Spring';

function App() {
  return (
    <div>
      <Header></Header>
      <Prices></Prices>
      <Chart></Chart>
      <SpecialChart></SpecialChart>
      <Spring></Spring>

    </div>
  );
}

export default App;
