import "./styles.css"
import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

export const ACTIONS ={
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
      if(payload.digit === "0" && state.currentOperand === "0") return state
      if(payload.digit === "." && state.currentOperand.includes('.') )  return state
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
        
      }
   case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        operation: `${state.operation || ""}${payload.operation}`,
        
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
      {/* <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit: 1 } }) }>1</button> */}
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton  operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton  operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton  operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <OperationButton  operation="=" dispatch={dispatch} />


    </div>
  );
}

export default App;
