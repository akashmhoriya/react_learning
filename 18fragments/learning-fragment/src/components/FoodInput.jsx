import styles from "./FoodInput.module.css";
const FoodInput = ({handleOnChange}) => {
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <input
      className={styles.foodInput}
      placeholder="Enter Food Item here"
      type="text"
      // onChange={(event) => {
      //   handleOnChange(event)
      //   // console.log(event.target.value);
      // }}
      onKeyDown={handleOnChange}
      
    />
  );
};

export default FoodInput;
