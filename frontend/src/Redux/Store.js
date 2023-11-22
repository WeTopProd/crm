import { configureStore } from "@reduxjs/toolkit"
import { setUser } from "./slice/UserSlice.js";

export const store = configureStore({
    reducer:{
        user: setUser
    }
});