import React, { useState } from 'react';

import HomeLayout from '../Layouts/HomeLayout';
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { toast } from 'react-hot-toast';
import { login } from '../Redux/Slices/AuthSlices';

function Signup() {

    const navigate  = useNavigate();
    const dispatch = useDispatch();

    const [previewImg,setPreviewImg] = useState("");
    const [loginData,setLogindata] = useState({
        email:"",
        password:"",
    });

    function handleUserInput(e){
        const {name,value} = e.target;
        setLogindata({
            ...loginData,
            [name]:value,
        });
    }
   
   

    async function onLogin(event){
        event.preventDefault();
        if(!loginData.email || !loginData.password){
            toast.error("Please fill all the field");
            return;
        }
     

        
        // dispatch create event action

        const response =  await dispatch(login(loginData));
     
        if(response.payload.success)
            navigate('/');

        setLogindata({
        email:"",
        password:"",
        });
    }

  return ( 
    <HomeLayout>
        <div className='flex items-center justify-center h-[100vh]'>
            <form 
            onSubmit={onLogin}
            noValidate
            className='flrx flex-col justify-center gap-10 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>

            <h1 className='text-center text-2xl font-bold '>Login Here</h1>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="email"
                className='text-semibold text-xl'
                >
                    Email
                </label>
                <input 
                type="email"
                id="email"
                name='email'
                className='w-full rounded my-2 bg-transparent border border-white-2 text-lg font-bold px-2' 
                placeholder='Enter email'
                onChange={handleUserInput}
                value={loginData.email}
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="password"
                className='text-semibold text-xl'
                >
                   password
                </label>
                <input 
                type="password"
                id="password"
                name='password'
                className='w-full rounded my-2 bg-transparent border border-white-2 text-lg font-bold px-2'
                placeholder='Enter password'
                onChange={handleUserInput}
                value={loginData.password}
                />
            </div>
            <button className='w-full bg-yellow-600 font-bold py-2 rounded-md my-3 text-lg '>Login</button>
            <p className='text-center text-lg'>Not an account yet ?crate one <Link to='/signup' className='link text-accent cursor-pointer'>signup</Link></p>
            </form>
           
        </div>
    </HomeLayout>
  );
}

export default Signup;