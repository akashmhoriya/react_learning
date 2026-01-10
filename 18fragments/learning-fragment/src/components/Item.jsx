// const Item = (props) => {
//   let {foodItem} = props;
//   return <li className="list-group-item">{foodItem}</li>;
// };
// export default Item;
import styles from "./Item.module.css";
const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const handleBuyButtonClicked = (foodItem,event) => {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being bought`);
  // };
  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={(event) => {
        //   // console.log(`${foodItem} being bought`);
        //   // handleBuyButtonClicked(foodItem,event);
        //   handleBuyButtonClicked(event);
        // }}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
