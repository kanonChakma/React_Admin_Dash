import { setupListeners } from "@reduxjs/toolkit/dist/query";
import globalReducer from "state";
import { api } from "state/api";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
       global: globalReducer,
       [api.reducerPath]: api.reducer,
    },
    middleware: (getDefault) => getDefault().concat(api.middleware),
})
setupListeners(store.dispatch);

export default store