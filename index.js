import React from "react";
import ReactDOM from "react-dom";
import Meals from "./Meals";
import { Image, List } from "semantic-ui-react";

const App = () => {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", File, false);
  return (
    <div>
      <h1 style={{ color: "maroon text-align: center" }}>
        TEXAS STATE CAMPUS DINING
      </h1>
      <h2 style={{ color: "maroon" }}>TODAY'S MENU</h2>
      <h2 style={{ color: "maroon" }}>Commons Dining Hall</h2>
      <Meals
        meal="Breakfast"
        foodOne="Fried Eggs"
        foodTwo="Plain Bagel"
        foodThree="Granola Cereal"
        foodFour="Fruit Salad"
      />
      <Meals
        meal="Lunch"
        foodOne="Tomato Soup"
        foodTwo="Greek Salad"
        foodThree="Turkey Sandwich"
        foodFour="Tuna Melt"
      />
      <Meals
        meal="Dinner"
        foodOne="Chinese Meatballs"
        foodTwo="Pepperoni Pizza"
        foodThree="Chicken Shawarma"
        foodFour="Alfredo Pasta"
      />
      <h2 style={{ color: "maroon" }}>Harris Dining Hall</h2>
      <Meals
        meal="Breakfast"
        foodOne="French Toast"
        foodTwo="Breakfast Tacos"
        foodThree="Blueberry Muffins"
        foodFour="Pancakes"
      />
      <Meals
        meal="Lunch"
        foodOne="Tomato Basil Pasta"
        foodTwo="Enchiladas"
        foodThree="BLT Sandwich"
        foodFour="Rice and Beans"
      />
      <Meals
        meal="Dinner"
        foodOne="Sweet and Sour Chicken"
        foodTwo="Pad Thai"
        foodThree="Cheese Pizza"
        foodFour="Chicken Wings"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
