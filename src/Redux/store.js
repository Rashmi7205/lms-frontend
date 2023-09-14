import {configureStore} from '@reduxjs/toolkit';


import authSloceReducer from './Slices/AuthSlices';
import courseSlice from './Slices/CourseSlices';

const store = configureStore({
    reducer:{
        auth:authSloceReducer,
        course:courseSlice,
    },
    devTools:true,
});

export default store;