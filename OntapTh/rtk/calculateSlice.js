import { createSlice } from "@reduxjs/toolkit";

const calculateSlice = createSlice({
    name: 'calculate',
    initialState: {result: 0},
    reducers: {
        add: (state, action) => {
            const {value1, value2} = action.payload;
            state.result = value1 + value2;
        },
        sub: (state, action) => {
            const {value1, value2} = action.payload;
            state.result = value1 - value2;
        },
        mul: (state, action) => {
            const {value1, value2} = action.payload;
            state.result = value1 * value2;
        },
        div: (state, action) => {
            const {value1, value2} = action.payload;
            state.result = value1 / value2;
        }
    }
})

export const {add, sub, mul, div} = calculateSlice.actions;
export default calculateSlice.reducer;