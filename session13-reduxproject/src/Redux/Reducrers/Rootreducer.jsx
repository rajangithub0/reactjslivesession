import { combineReducers } from "redux"
import CounterReducer from "./Counterreducer"
import CartReducer from "./Cartreducer";



const Rootreducer = combineReducers({
    counter: CounterReducer,
    CartReducer: CartReducer,
})

export default Rootreducer;