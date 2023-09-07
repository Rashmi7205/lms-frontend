import React from 'react';
import {useDispatch,useSelector} from 'react-redux';

import {FiMenu} from 'react-icons/fi';
import {AiFillCloseCircle} from 'react-icons/ai';
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';

 
function changeWidth(){
    const drawerSide = document.getElementsByClassName('drawer-side');
    drawerSide[0].style.width='auto';
}

function hideDrawer(){
    const element = document.getElementsByClassName('drawer-toggle');
    element[0].checked=false;
    changeWidth();
}

async function handleLogout(e){
    e.preventDefault();

    // const ress = await dispatch(logout());
    // if(res?.payload?.success){

    // }
    navigate('/');

}

function Homelayout({children}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //For Checking if user is loggedin 
    const isLoggedIn = useSelector((state)=>state?.auth?.isLoggedIn);

    //for role
    const role = useSelector((state)=>state?.auth?.role);


  return (
    <div className='min-h-[90vh] bg-slate-800 text-white'>
        <div className="drawer absolute left-0 z-50 w-fit flex flex-col">
            <input className="drawer-toggle" id='my-drawer' type='checkbox'/>
            <div className="drawer-content">
                <label htmlFor="my-drawer" className='relative cursor-pointer'>
                    <FiMenu
                    onClick={changeWidth}
                    size={"32px"}
                    className='font-bold text-white m-4'
                    />
                </label>
            </div>
            <div className="drawer-side w-0 ">
                <label htmlFor='my-drawer' className='drawer-overlay'>

                </label>
                <ul className='menu p-4 h-[100%] w-48 sm:w-80 bg-slate-800 taxt-base-content relative text-lg'>
                <li className='w-fit absolute right-2 z-50'>
                    <button onClick={hideDrawer}>
                        <AiFillCloseCircle size={24}/>
                    </button>
                </li>
                <li >
                    <Link to='/' className='hover:text-white hover:bg-slate-400'>Home</Link>    
                </li>
                 {
                    isLoggedIn && role==='ADMIN'&& <li >
                    <Link to='/admin/dashboard' className='hover:text-white hover:bg-slate-400'>Admin Dashboard</Link>    
                    </li>
                }
                <li>
                    <Link to='/courses' className='hover:text-white hover:bg-slate-400'>All Courses</Link>    
                </li>
                <li>
                    <Link to='/contact' className='hover:text-white hover:bg-slate-400'>Contact Us</Link>    
                </li>
                <li>
                    <Link to='/about' className='hover:text-white hover:bg-slate-400'>About Us</Link>    
                </li>
                {
                    !isLoggedIn && <li className='absolute bottom-4 w-[90%]'>
                        <div className='w-full flex'>
                            <Link to='/login'>
                                <button className='btn-primary px-4 py-2 font-semibold rounded-md '>
                                    Login
                                </button>
                            </Link>
                            <Link to='/signup'>
                                <button className='btn-secondary px-4 py-2 font-semibold rounded-md '>
                                   sign up
                                </button>
                            </Link>
                        </div>
                    </li>
                }
                 {
                    isLoggedIn && <li className='absolute bottom-4 w-[90%]'>
                        <div className='w-full'>
                            <Link to='/login'>
                                <button className='btn-primary px-4 py-2 font-semibold rounded-md '>
                                   profile
                                </button>
                            </Link>
                            <button className='btn-secondary px-4 py-2 font-semibold rounded-md '
                            onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </li>
                }
                </ul>
               
                
            </div>
        </div>
        {children}
        <Footer/>
    </div>
  )
}

export default Homelayout