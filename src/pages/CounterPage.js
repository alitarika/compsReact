import Button from "../components/Button";
// import useCounterAndLog from "../hooks/use-counter";
import { useState } from "react";
import Panel from "../components/Panel";

function CounterPage({ initialCount }) {
  // const { count, increment, decrement } = useCounterAndLog(initialCount);
  const [count, setCount] = useState(initialCount);
  const [valToAdd, setValToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    setValToAdd(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCount(count + valToAdd);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button className="mr-2" primary rounded onClick={increment}>
          Increment
        </Button>
        <Button danger rounded onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={valToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button primary rounded>
          Add it!
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
