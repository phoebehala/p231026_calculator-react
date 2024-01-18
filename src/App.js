import "./styles.css"
import { useReducer } from "react";

const ACTIONS ={
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: "evaluate",
}
//const reducer = (state, action) => {
const reducer = (state, { type, payload }) => {
  console.log('here')
  console.log(state)
  console.log({ type, payload })
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
        
      }
    default:
      return state;
  }
};

function App() {
  
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {currentOperand:"", previousOperand:"", operation:""});

  return (
    <div className="calculator-grid">
      
      <div className="output">
        <div className="previous-operand">{previousOperand}{operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>

      <button className="span-two">AC</button>
      <button>DEL</button>
      <button >+</button>
      <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit: 1 } }) }>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>


    </div>
  );
}

export default App;
