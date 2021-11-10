import "./App.css";
import {  useReducer } from "react";
const initialState={  count:10  }; 
const reducer = (state,action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count +1 };
      case "decrement":
        return { count: state.count - 1 };
        case "reset":
          return { count: action.payload };
          default:
            return state;

  }
};

export default function App() {
const [state, dispatch] = useReducer(reducer, initialState);
return (
  <div className="App">
  <h2>Count is: {state.count}</h2>
  <button onClick={() => dispatch ({type: "increment"})}>+</button>
  <button onClick={() => dispatch ({type: "decrement"})}>-</button>
  <button onClick={() => dispatch ({type: "reset",payload: 0 })}>
   reset
   </button>
   </div>
   );
}

