import { configureStore } from "@reduxjs/toolkit";
import calculateSlice from "./calculateSlice";


const store = configureStore({
    reducer: {
        calculator: calculateSlice 
    }
})

export default store