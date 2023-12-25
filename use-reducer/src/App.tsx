import React, { useReducer } from "react";
import { reducer } from "./Reducer";

const initial_value = 0;
const App = () => {
  const [count, dispatch] = useReducer(reducer, initial_value);

  return (
    <div
      style={{
        display: "flex",
        gap: 15,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "40px",
      }}
    >
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        style={{ backgroundColor: "wheat" }}
      >
        Add
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={{ backgroundColor: "wheat" }}
      >
        Minus
      </button>
    </div>
  );
};

export default App;
