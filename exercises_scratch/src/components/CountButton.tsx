interface CountButtonProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CountButton: React.FC<CountButtonProps> = ({ setCount, count }) => {
  const incrementCounter = () => setCount(count + 1);

  const decrementCounter = () =>
    setCount(count - 1);

  return (
    <div>
      <button onClick={incrementCounter}>ADD 1</button>
      <button onClick={decrementCounter}>MINUS 1</button>
    </div>
  );
};

export default CountButton;
