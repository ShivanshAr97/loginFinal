import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice.js"
import textReducer from "../features/texts/textSlice.js"

export default configureStore({
    reducer:{
        auth:authReducer,
        texts:textReducer
    }
})