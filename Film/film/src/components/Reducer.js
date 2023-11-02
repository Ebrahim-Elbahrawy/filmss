import { React, useReducer } from "react";
const intialValue = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { state };
  }
};
function Reducer() {
  const [state, dispatch] = useReducer(reducer, intialValue);

  return (
    <div>
      value is {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Reducer;
