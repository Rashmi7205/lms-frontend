import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { build } from 'vite';
import axiosInstance from '../../Helpers/axiosInstance';
import toast from 'react-hot-toast';


const initialState = {
    course :[],
}

const getAllCourses = createAsyncThunk('/course/get',async ()=>{
    try{
        const response = axiosInstance.get('/courses');
        toast.promise(response,{
            loading:'Loading course data',
            success:'Course loaded successfuly',
            error:'failed to load the error',
        });

        return (await response)?.data;
    }catch(err){
        toast.error(err?.response?.data?.message);
    }
});


const courseSlice = createSlice({
    name:'course',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

    }
});

export default courseSlice;