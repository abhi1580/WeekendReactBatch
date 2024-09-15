import { useReducer } from "react";
//global reducer function
function countReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    case "INC BY AMT":
      return { ...state, count: state.count + action.amount };
    case "DEC BY AMT":
      return { ...state, count: state.count - action.amount };
    default:
      throw Error(`Sorry! invalid action ${action.type}`);
  }
}
//React Component
const CountIncDec = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  //event handlers
  const handleIncrement = () => {
    dispatch({ type: "INCREASE" });
  };
  const handleDecreament = () => {
    dispatch({ type: "DECREASE" });
  };
  const incrementByAmt = (amt) => {
    dispatch({ type: "INC BY AMT", amount: amt });
  };
  const decrementByAmt = (amt) => {
    dispatch({ type: "DEC BY AMT", amount: amt });
  };
  return (
    <div>
      <button
        className={"btn btn-outlined btn-danger m-5 btn-secondary"}
        onClick={() => decrementByAmt(5)}
      >
        - by 5
      </button>
      <button
        className={"btn btn-outlined btn-danger m-5 btn-secondary"}
        onClick={handleDecreament}
      >
        -
      </button>
      <span>{state.count}</span>

      <button
        className={"btn btn-secondary btn-success m-5 btn-outlined"}
        onClick={handleIncrement}
      >
        +
      </button>
      <button
        className={"btn btn-secondary btn-success m-5 btn-outlined"}
        onClick={() => incrementByAmt(5)}
      >
        + by 5
      </button>
    </div>
  );
};

export default CountIncDec;
