import './App.css';
import FoodCard from './components/food_card';
import SearchBar from './components/search_bar';

function App() {
  return (
    <div  style={{backgroundColor: "#EFEEFA"}}>
      {/* <FoodCard height="152px" width="156px" heading1='Food' heading2='Order food from across campus'/> */}
      <SearchBar height="52px" width="328px"/>
    </div>
  );
}

export default App;
