import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // the spread operator (...) to make a copy of our foods array, and insert it into a new array
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
    console.log(newFood);
  }
  // Calling .filter will return a new array based on which elements match our criteria in the callback function
  function handleLiClick(id){
    // const newFoodArray = foods.filter((food) => food.id !== id);
    // setFoods(newFoodArray);
    // // Setting state with this updated list of foods will re-render our component, causing the food to be removed from the list.
    // [1, 2, 3].filter((number) => number !== 3);
  
    // [1, 2, 3].map((number) => {
    //   if (number === 3) {
    //     // if the number is the one we're looking for, increment it
    //     return number + 100;
    //   } else {
    //     // otherwise, return the original number
    //     return number;
    //   }
    // });
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  // .map on our array to generate an array of <li> elements from our array of foods, and display them in the <ul>:
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {/* a click handler to pass an id of food that upon click will be removed */}
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
