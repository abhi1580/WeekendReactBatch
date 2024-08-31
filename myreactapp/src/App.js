// import CarList from './components/cars/CarList';
// import CityList from './components/CityList';
// import Count from './components/Count';
// import CountState from './components/CountState';
// import SampleForm from './components/SampleForm';
// import Toolbar from './components/Toolbar';
// import Voter from './components/Voter';
import ShopRouter from './router/ShopRouter';

function App() {
  return (
    <div className="container">
      {/* <Toolbar/>
      <SampleForm/>
      <Voter citizen={{name:"Abhay Panchal",age:26}}/>
      <Voter citizen={{name:"Yash Panchal",age:4}}/>
      <CityList/>
      <CarList/>
      <Count/>
      <CountState/> */}
      <ShopRouter/>
    </div>
  );
}

export default App;
