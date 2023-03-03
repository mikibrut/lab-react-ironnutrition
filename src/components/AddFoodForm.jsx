import React, {useState} from 'react'
import { Divider, Input } from 'antd';


export default function AddFoodForm({handleAddFood}) {
const initialState = {
    name: "",
    calories: 0,
    image: "",
    servings: 1
}

const [newFood , setNewFood] = useState(initialState)

const handleChange = (e) => {
    setNewFood(prev => {
        return {
            ...prev,
            [e.target.name]: e.target.value
        }
        ;
    });
}

const handleSubmit = (e) => {
    e.preventDefault();
    handleAddFood(newFood);
    setNewFood(initialState);
    console.log(newFood)
}

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input type="text" name="name" value={newFood.name} onChange={handleChange} />

      <label>Image</label>
      <Input type="text" name="image" value={newFood.image} onChange={handleChange} />

      <label>Calories</label>
      <Input type="number" name="calories" value={newFood.calories} onChange={handleChange} />

      <label>Servings</label>
      <Input type="number" name="servings" value={newFood.servings} onChange={handleChange} />

      <button type="submit">Create</button>
    </form>
  )
}
