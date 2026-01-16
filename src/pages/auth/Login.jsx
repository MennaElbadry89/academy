import  './auth.css'
import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import LoginSchema from '../validation/Login';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Login(){
const { loginHandler  , loading} = useContext(authContext)

const navigate = useNavigate()
const [errorFirebase , setErrorFirebase] = useState(null)

const {register , handleSubmit ,  formState: { errors , isDirty , isValid}} = useForm({

        resolver : zodResolver( LoginSchema),
        mode : 'all'
})

const LoginSubmitHandler = async(data)=>{
    const response = await loginHandler(data)
    if(response.success){
        navigate('/profile')
    }else{
        setErrorFirebase(response.message)
    }

}
    return(
        <>
         <div className="@container Regiser my-0 bg-gray-200 p-5">
            <h1 className="m-5 text-3xl font-semibold text-amber-500 md:text-5xl">Login Now </h1>
        <div className="m-auto flex w-full items-center justify-center md:w-1/2"> 
              <form onSubmit={handleSubmit(LoginSubmitHandler)}  className="my-5 flex w-full flex-col justify-center gap-5 rounded-lg border border-amber-300 bg-white p-5 shadow-lg">
                                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold text-gray-900">E-mail</label>
                    <input type="text" {...register( "email")} 
                    className= {` ${errors.email ? "invalid" : ""}w-4/5 rounded-lg border border-amber-300 p-3`}/>
                        { errors.email && <p className="text-red-500">{errors.email.message}</p> }
                </div>              
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-semibold text-gray-900">Password</label>
                    <input type="text" {...register( "password")} 
                    className= {` ${errors.password ? "invalid" : ""}w-4/5 rounded-lg border border-amber-300 p-3`}/>
                        { errors.password && <p className="text-red-500">{errors.password.message}</p> }
                </div> 

                { errorFirebase && <p className="alert text-red-500">{errorFirebase}</p> }
               <button disabled={ !isDirty || !isValid || loading}
               className="authbtn w-1/2 cursor-pointer rounded-lg border-none bg-amber-500 p-3 text-white hover:bg-amber-400">
                { loading ? <div className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'></div>
                : "Submit" }
               </button> 
            </form>
        </div>
    </div>
       </>
    )
}