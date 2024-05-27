import { useState } from "react";

const ReactComponent = ({ text }: { text: string }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>
        {text}: {count}
      </div>
      <button className="btn" onClick={handleIncrement}>
        increment
      </button>
    </div>
  );
};
export default ReactComponent;
