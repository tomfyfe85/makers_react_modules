
const Product: React.FC<{productName: string, price: number}> = ({productName, price}) => {
  return (<>
    <p>product name: {productName}</p>
    <p>price: £{price}</p>
    <p></p>
  </>);
}
 
export default Product;