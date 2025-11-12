import React, { use, useState } from 'react';
import Navbar from '../../components/Header/Navbar';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const {createUser,signGoogle, setUser, updateUser}=use(AuthContext);
    const [Error,setError]=useState('');
    const [passwordError,setPasswordError]=useState("");
    const navigate=useNavigate();
    const handleRegister=(e)=>{
        e.preventDefault();
        const name=e.target.name.value
        const photoUrl=e.target.image.value
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(name,photoUrl,email,password);
        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter");
            return;
        } 
        else if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one lowercase letter");
            return;
        } 
        else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            return;
        }
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            updateUser({displayName:name, photoURL:photoUrl})
            .then(()=>{
                const newUser={
                name:result.user.displayName,
                email:result.user.email,
                image:result.user.photoURL
            };

            //create user in the database
            fetch('http://localhost:3000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('data after save to database',data);
                setUser({...user, displayName:name, photoURL:photoUrl});
                navigate('/');
            })
                
            })
            .catch(error=>{
                const ErrorMessage=error.code;
                setError(ErrorMessage);
                toast(ErrorMessage);

            })
        })
        .catch(error=>{
            const ErrorMessage=error.code;
            setError(ErrorMessage);
            toast(ErrorMessage);
        })
    }

    const handleGoogleSignUp=()=>{
        signGoogle()
        .then(result=>{
            const user=result.user;
            console.log(user);
            const newUser={
                name:result.user.displayName,
                email:result.user.email,
                image:result.user.photoURL
            }

            //create user in the database
            fetch('http://localhost:3000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('data after save to database',data);
            })
            navigate('/');
        })
        .catch(error=>{
            const ErrorMessage=error.code;
            setError(ErrorMessage);
            toast(ErrorMessage);
        })
    }
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="hero mt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            <h1 className='text-center font-bold text-3xl px-25'>Register</h1>
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' placeholder="Write Your Name" required />
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" name='image' placeholder="Paste your Photo URL" required/>
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" required/>
                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" required />
                        {
                           passwordError && <p className='text-xs text-error'>{passwordError}</p> 
                        }
                        {Error && <p className='text-xs text-error'>{Error}</p>}
                        <button className="btn btn-neutral mt-4">Register</button>
                        <button type='button' onClick={handleGoogleSignUp} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        SignUP with Google
                        </button>
                        <h1>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></h1>
                        </fieldset>
                    </form>
                    <ToastContainer/>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;