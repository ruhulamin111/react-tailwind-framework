
import './App.css';
import Chart from './components/Chart/Chart';
import Header from './components/Header/Header';
import Prices from './components/Prices/Prices';
import SpecialChart from './components/SpecialChart/SpecialChart';

function App() {
  return (
    <div>
      <Header></Header>
      <Prices></Prices>
      <Chart></Chart>
      <SpecialChart></SpecialChart>

    </div>
  );
}

export default App;
