// import React from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  //destructuring the element of array which is given by useState
  // let [textToShow,setTextState] = useState("Food Item Entered by user");
  // let [textToShow,setTextState] = useState();
  // let [foodItems,setFoodItems] = useState(["Dal", "Green Vegetable", "Roti"]);
  let [foodItems,setFoodItems] = useState([]);

  // console.log(textToShow);

  const handleOnChange = (event) => {
    if (event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems,newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is "+ newFoodItem);
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);
  };
  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry.</h3>;
  // }
  // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3>: null
  return (
    // <React.Fragment>
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
      <p>Above is the list of healthy foods that are good for your health and well being.</p>
    </Container> */}
    </>
    // </React.Fragment>
  );
}

export default App;
