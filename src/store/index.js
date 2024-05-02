// redux store
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authSliceReducer from "./authSlice";
import guestDestinationSliceReducer from "./guestDestinationSlice";
import ListingReducer from "./listingReducer";
import guestBookingReducer from "./guestBookingSlice";
import guestResults from "./guestResults";
import authSliceHostReducer from "./authSlice-host";
const store=configureStore({

    reducer:{
        auth:authSliceReducer,
        hostauth:authSliceHostReducer,
        destination:guestDestinationSliceReducer,
        guestSearch:guestResults,
        listing: ListingReducer,
        booking:guestBookingReducer,

    },
    middleware:[thunk],

})

export default store;