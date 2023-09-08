import React, { useState } from 'react';
import {BsPersonCircle} from 'react-icons/bs'
import HomeLayout from '../Layouts/HomeLayout';
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { toast } from 'react-hot-toast';

function Signup() {

    const navigate  = useNavigate();
    const dispatch = useDispatch();

    const [previewImg,setPreviewImg] = useState("");
    const [signUpData,setSignUpdata] = useState({
        fullName:"",
        email:"",
        password:"",
        avatar:"",
    });

    function handleUserInput(e){
        const {name,value} = e.target;
        setSignUpdata({
            ...signUpData,
            [name]:value,
        });
    }
   
    function getImage(event){
        event.preventDefault();
        /// getting the image
        const uploadImage =event.target.files[0];

        if(uploadImage){
            setSignUpdata({
                ...signUpData,
                avatar:uploadImage,
            });
            const fileReader =  new FileReader();
            fileReader.readAsDataURL(uploadImage);
            fileReader.addEventListener("load",function(){
                setPreviewImg(this.result);
            });
        }
    }

    function createNewAccount(event){
        event.preventDefault();
        if(!signUpData.email || !signUpData.password||!signUpData.fullName || !signUpData.avatar){
            toast.error("Please fill all the field");
            return;
        }
        //Checking name firld length
        if(signUpData.fullName.length<5){
            toast.error("Name must be atleast 5 character");
            return;
        }
        if(signUpData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            toast.error("Invalid Email id");
            return ;
        }
        if(signUpData.password.match(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/
        )){
            toast.error("password contains at least one symbol and is at least 6 characters long");
            return;
        }
    }

  return ( 
    <HomeLayout>
        <div className='flex items-center justify-center h-[100vh]'>
            <form 
            onSubmit={createNewAccount}
            noValidate
            className='flrx flex-col justify-center gap-10 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>

            <h1 className='text-center text-2xl font-bold '>Registration page</h1>
            <label htmlFor="image_uploads" className='cursor-pointer'>
                {
                    previewImg?
                    <img src={previewImg} className='h-24 w-24 m-auto rounded-full'/>
                    :<BsPersonCircle className='h-24 w-24 m-auto rounded-full'/>
                }
                <input 
                onChange={getImage}
                className='hidden'
                accept='.jpg, .png, .jpeg, .svg'
                type="file"
                name="image_uploads" 
                id="image_uploads" 
                />
            </label>
            <div className='flex flex-col gap-1'>
                <label htmlFor="fullName"
                className='text-semibold text-xl'
                >
                   Name
                </label>
                <input 
                type="text"
                name='fullName'
                id="fullName"
                className='w-full rounded my-2 bg-transparent border border-white-2 text-lg font-bold px-2' 
                placeholder='Enter Username'
                onChange={handleUserInput}
                value={signUpData.fullName}
                />
            </div>
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
                value={signUpData.email}
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
                value={signUpData.password}
                />
            </div>
            <button className='w-full bg-yellow-600 font-bold py-2 rounded-md my-3 text-lg '>Create Account</button>
            <p className='text-center text-lg'>Already have an account <Link to='/login' className='link text-accent cursor-pointer'>Login</Link></p>
            </form>
           
        </div>
    </HomeLayout>
  );
}

export default Signup;