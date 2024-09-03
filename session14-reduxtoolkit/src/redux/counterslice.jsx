import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    }, reducers: {
        incement: state => {
            state.count = state.count + 1;
        },
        decrement: state => {
            state.count = state.count - 1;
        },
        incrementByAmount: (state, action) => {
            state.count = state.count + action.payload
        }, decrementByAmount: (state, action) => {
            state.count = state.count - action.payload
        }
    }
})

export const { incement, incrementByAmount, decrement, decrementByAmount } =
    counterSlice.actions;
export default counterSlice.reducer;
