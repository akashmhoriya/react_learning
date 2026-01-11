import Item from "./Item";
import { useState } from "react";
const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item) => {
    let newItems = [...activeItems,item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          // handleBuyButton={() => {
          //   console.log(`${item} bought`);
          // }}
          handleBuyButton={() => onBuyButton(item)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
