import React, { use } from 'react';
import Navbar from '../../components/Header/Navbar';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';

const Login = () => {
    const navigate=useNavigate();
    const {signInUser,signGoogle}=use(AuthContext);
    const handleSignIn=(e)=>{
        e.preventDefault();
        const email=e.target.email.value
        const password=e.target.password.value
        signInUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate('/');
        })

    }

    const handleGoogleSignIn=()=>{
        signGoogle()
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignIn}>
                        <fieldset className="fieldset">
                            <h1 className='text-center font-bold text-3xl'>LogIn</h1>
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <button type='button' onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        SignIn with Google
                        </button>
                        <h1>Already have an account? <Link to='/register' className='text-blue-600'>Register</Link></h1>
                        </fieldset>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;