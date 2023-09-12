import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../../Helpers/axiosInstance';
import {toast} from 'react-hot-toast';

const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn')||false,
    role:localStorage.getItem('role')||"",
    data:localStorage.getItem('date')||{}
};


export const createAccount = createAsyncThunk('/auth/signup',async (data)=>{
    try {
            const res = axiosInstance.post('user/register',data);
            toast.promise(res,{
                loading:"Wait ! creatting your account ",
                success:(data)=>{
                    return data?.data?.message;
                },
                error:"Failed to create Account",
            });
            return (await res)?.data;
        } catch (error) {
        toast.error(error?.response?.data?.message);
    }
    
});

export const login = createAsyncThunk('/auth/login',async (data)=>{
    try {
            const res = axiosInstance.post('user/login',data);
            toast.promise(res,{
                loading:"Wait ! Authentication in progress... ",
                success:(data)=>{
                    return data?.data?.message;
                },
                error:"Failed to login",
            });
            return (await res)?.data;
        } catch (error) {
        toast.error(error?.response?.data?.message);
    }
    
});

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem('data',JSON.stringify(action?.payload?.user));
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('role',action?.payload?.user?.role);

            state.isLoggedIn=true;
            state.data =action?.payload?.user;
            state.role=action?.payload?.user?.role;
        })
    }
});

// export const  {} = authSlice.actions;
export default authSlice.reducer;