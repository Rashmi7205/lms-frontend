import {configureStore} from '@reduxjs/toolkit';


import authSloceReducer from './Slices/AuthSlices';

const store = configureStore({
    reducer:{
        auth:authSloceReducer
    },
    devTools:true,
});

export default store;