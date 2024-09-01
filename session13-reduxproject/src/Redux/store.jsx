import { createStore } from "redux";
import Rootreducer from "./Reducrers/Rootreducer";

const store = createStore(Rootreducer);

export default store;