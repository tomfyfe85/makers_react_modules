const ClickListener = () => {
  const handleClick = (event:object) => {
    console.log(event)
  }
  return <button onClick={handleClick}>Click ME!</button>;
}
 
export default ClickListener;