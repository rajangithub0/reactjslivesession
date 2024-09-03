import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterslice'

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
}

)


export default store