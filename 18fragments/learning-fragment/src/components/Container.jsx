import styles from "./Container.module.css";
const Container = ({children}) => {
  return <div className={styles.container}>{children}</div>
};
// const Container = (props) => {
//   return <div className={styles.container}>{props.children}</div>
// };

export default Container;
