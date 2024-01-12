import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/auth/userReducer";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});

// HOST
export const server = "https://myecommerceapp-w3di.onrender.com/api/v1";