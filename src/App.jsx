import './App.css';
import foodList from './foods.json';
import React, {useState} from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

const [foods, setFoods] = useState(foodList);
const [searchValue, setSearchValue] = useState('');

const handleAddFood = (newFood) => {
  setFoods([...foods, newFood])
}

const handleSearch = (e) => {
  setSearchValue(e)
}

const handleDelete = (foodName) => {
  const filteredFood = [...foods].filter(elem => elem.name !== foodName)
  setFoods(filteredFood)
}

  return (
    <div className="App">
      <h1>Food List</h1>
      <div>
        <Search handleSearchValue={handleSearch}/>
      </div>
      <div>
        <AddFoodForm handleAddFood={handleAddFood}/>
      </div>
      <div>
        {foods
        .filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((elem,i) => {
          return (
            <FoodBox  key={i} food={elem} handleDelete={handleDelete}/>
          );
        })};
      </div>
    </div>
  );
}

export default App;
