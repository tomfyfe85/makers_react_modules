import "./App.css";
import Profile from "./components/Profile";
import Product from "./components/Product"
// import Button from "./components/Button";
function App() {
  const name: string = "Quakie Makers";
  const job: string = "Makers' fav duck";
  const birth_date: string = "2023";

  const productName: string = "Air Fryer K2000"
  // const description: string = "The best air fryer to fry all things, even Mars bars"
  const price: number = 2000
  return (
    <>
      <Profile name={name} job={job} birth_date ={birth_date} />
      <Product productName={productName} price={price} />
      {/* <Button names={['Anna', 'Jose', 'Lila']} /> */}
    </>
  );
}

export default App;
