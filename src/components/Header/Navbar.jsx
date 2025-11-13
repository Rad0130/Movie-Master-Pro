import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';

const Navbar = () => {
    const navigate=useNavigate();
    const {user,logOut}=use(AuthContext);

    const handleLogout=()=>{
        logOut()
        .then(()=>{
            alert("user Logged Out Successfully");
            navigate('/login');
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handletheme=(checked)=>{
        const html=document.querySelector('html');
        if(checked){
            html.setAttribute('data-theme','light')
        }
        else{
            html.setAttribute('data-theme','dark')
        }
    }
    const links=<>
        <li className='font-bold'><NavLink to='/'>Home</NavLink></li>
        <li className='font-bold'><NavLink to='/allmovies'>All Movies</NavLink></li>
        <li className='font-bold'><NavLink to='/addmovies'>Add Movies</NavLink></li>
        {user && <li className='font-bold'><NavLink to='/collections'>My Collection</NavLink></li>}
        {user && <li className='font-bold'><NavLink to='/watch'>My WatchList</NavLink></li>}    
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm border-b border-gray-500 fixed top-0 left-0 right-0 z-50 max-w-[1652px] mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
            </ul>
            </div>
            <div className='flex items-center gap-4'>
                <a className="font-bold text-2xl"><span className='text-red-900'>Movie</span><span>Master</span></a>
                <input onClick={(e)=>handletheme(e.target.checked)} type="checkbox" defaultChecked={localStorage.getItem('theme')==="dark"} className="toggle theme-controller" />
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {links}
            </ul>
        </div>
        <div className="navbar-end flex gap-2">
            {
                user? <div className='flex items-center gap-2'>
                <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="flex items-center  mr-5"><img className='w-8 h-8 rounded-full cursor-pointer' src={user.photoURL} alt="Profile" /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a className='font-bold'>{user.displayName}</a></li>
                    <li><a className='font-bold'>{user.email}</a></li>
                </ul>
                </div>
                
                <Link onClick={handleLogout} className='px-4 py-2 rounded-[5px] cursor-pointer bg-red-900 font-bold'>Logout</Link></div>:<div><Link to='/login' className='btn bg-primary'>Login</Link>
            <Link to='/register' className='btn bg-primary'>Register</Link></div>
            }
        </div>
        </div>
    );
};

export default Navbar;