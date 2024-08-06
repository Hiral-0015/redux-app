import logo from './logo.svg';
import './App.css';
import CounterComp from './Components/CounterComp';
import UserComp from './Components/UserComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChartComp from './Components/ChartComp';
import ApexChart from './Components/ApexChart';
import ValidationForm from './Components/ValidationForm'
function App() {
  return (
    <>
      <h1>Redux-App</h1>
      <CounterComp />
      {/* <UserComp/> */}
      {/* <ChartComp/> */}
      {/* <ApexChart/> */}
      <ValidationForm />
    </>
  );
}

export default App;
