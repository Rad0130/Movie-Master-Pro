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
    const links=<>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allmovies'>All Movies</NavLink></li>
        <li><NavLink to='/collections'>My Collection</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
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
            <a className="btn btn-ghost text-xl">Movie Master</a>
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
                <div tabIndex={0} role="button" className="flex items-center"><img className='w-8 h-8 rounded-full cursor-pointer' src={user.photoURL} alt="Profile" /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>{user.displayName}</a></li>
                    <li><a>{user.email}</a></li>
                </ul>
                </div>
                
                <Link onClick={handleLogout} className='btn bg-red-500'>Logout</Link></div>:<div><Link to='/login' className='btn bg-primary'>Login</Link>
            <Link to='/register' className='btn bg-primary'>Register</Link></div>
            }
        </div>
        </div>
    );
};

export default Navbar;