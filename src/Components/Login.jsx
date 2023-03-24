import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineGithub } from 'react-icons/ai'
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase.config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/bazarSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

     const dispatch = useDispatch()
      const navigate = useNavigate()
    const provider = new GoogleAuthProvider();


    const handleGoogleLogin = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                   console.log(user)
                 dispatch(addUser({
                   _id:user.uid,
                   name:user.displayName,
                   email:user.email,
                   image:user.photoURL
                 }
                 
                 ))

                setTimeout(()=>{
                    navigate('/')
                },1500)

                // ...
            }).catch((error) => {
               
            });
    }


    const handleSingOut = () => {
        signOut(auth).then(() => {
            toast.success('Log out successfully')
            // Sign-out successful.
           dispatch(removeUser())
             
        }).catch((error) => {
            // An error happened.
            // console.log(error)
        });
    }

    return (
        <div className="mx-20  ">

            <div className='flex flex-col items-center justify-center gap-5 min-h-screen'>
                <div className='flex gap-5 items-center'>
                    <div className='px-2 py-2 border text-black font-medium font-Edu w-52 rounded'>
                        <button onClick={handleGoogleLogin} className='flex justify-center items-center gap-1'><span><FcGoogle size={25} /></span><span>Continue with google</span></button>
                    </div>
                    <div className='px-2 py-2 border text-white bg-black font-medium font-Edu w-32 rounded text-center'>
                        <button onClick={handleSingOut}>Singout</button>
                    </div>
                </div>

                <div className='flex gap-5 items-center'>
                    <div className='px-2 py-2 border text-black font-medium font-Edu w-52 rounded'>
                        <button className='flex justify-center items-center gap-1'><span><AiOutlineGithub size={25} /></span><span>Continue with github</span></button>
                    </div>
                    <div className='px-2 py-2 border text-white bg-black font-medium font-Edu w-32 rounded text-center'>
                        <button>Singout</button>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    )
}

export default Login