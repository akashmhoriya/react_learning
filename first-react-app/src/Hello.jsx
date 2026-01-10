function Hello() {
  let myName = "Akash";
  let fullName = () => {
    return "Akash Saini";
  }
  return <h3>
    Hello this is the future speaking! {fullName()}
  </h3>
}

export default Hello;