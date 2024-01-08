import Button from "../components/Button";
import useCounterAndLog from "../hooks/use-counter";

function CounterPage({ initialCount }) {
  const { count, increment, decrement } = useCounterAndLog(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button primary onClick={increment}>
        Increment
      </Button>
      <Button danger onClick={decrement}>
        Decrement
      </Button>
    </div>
  );
}

export default CounterPage;
