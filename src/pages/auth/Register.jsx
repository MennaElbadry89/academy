import './auth.css'
import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod';
import RegisterSchema from '../validation/Register';
import {useState} from 'react';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

export default function Register(){

    const navigate = useNavigate();
    const { regiserHandler , loading} = useContext(authContext);
    const [errfirebase , setErrfirebase] =useState(null);
    
    const { register, handleSubmit, formState: { errors , isValid , isDirty }} = useForm({
    resolver: zodResolver(RegisterSchema),
  })

  console.log(errors);

  const RegisterSubmitHandler = async(data) => {
   const response = await regiserHandler(data);
    if(response.success){
    console.log(data);
         navigate("/profile");
  }else{
    setErrfirebase(response.message);
  }
}

    return(
        <>
  

        <div className="@container Regiser my-0 bg-gray-200 p-5">
            <h1 className="m-5 text-3xl font-semibold text-amber-500 md:text-5xl">Register Now </h1>
        <div className="m-auto flex w-full items-center justify-center md:w-1/2"> 
              <form onSubmit={handleSubmit(RegisterSubmitHandler)} className="my-5 flex w-full flex-col justify-center gap-5 rounded-lg border border-amber-300 bg-white p-5 shadow-lg">
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstname" className= "font-semibold text-gray-900">First Name</label>
                    <input type="text" {...register( "firstname")}
                     className= {` ${errors.firstname ? "invalid" : ""}w-4/5 rounded-lg border border-amber-300 p-3`}/>
                     { errors.firstname && <p className="text-red-500">{errors.firstname.message}</p> }
                </div>        
                <div className="flex flex-col gap-2">
                    <label htmlFor="lastname" className="font-semibold text-gray-900">Last Name</label>
                    <input type="text" {...register( "lastname")} 
                    className= {` ${errors.lastname ? "invalid" : ""}w-4/5 rounded-lg border border-amber-300 p-3`}/>
                        { errors.lastname && <p className="text-red-500">{errors.lastname.message}</p> }
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold text-gray-900">E-mail</label>
                    <input type="text" {...register( "email")} 
                    className= {` ${errors.email ? "invalid" : ""}w-4/5 rounded-lg border border-amber-300 p-3`}/>
                        { errors.email && <p className="text-red-500">{errors.email.message}</p> }
                </div>  
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-semibold text-gray-900">Phone</label>
                    <input type="text" {...register( "phone")} 
                    className= {` ${errors.phone ? "invalid" : ""}w-4/5 rounded-lg border border-amber-300 p-3`}/>
                        { errors.phone && <p className="text-red-500">{errors.phone.message}</p> }
                </div>              
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-semibold text-gray-900">Password</label>
                    <input type="text" {...register( "password")} 
                    className= {` ${errors.password ? "invalid" : ""}w-4/5 rounded-lg border border-amber-300 p-3`}/>
                        { errors.password && <p className="text-red-500">{errors.password.message}</p> }
                </div> 
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirmedpassword" className="font-semibold text-gray-900">Confirm-password</label>
                    <input type="text" {...register( "confirmedpassword")} 
                     className= {` ${errors.confirmedpassword ? "invalid" : ""}w-4/5 rounded-lg border border-amber-300 p-3`}/>
                        { errors.confirmedpassword && <p className="text-red-500">{errors.confirmedpassword.message}</p> }
                </div>
                { errfirebase && <p className="alert text-red-500">{errfirebase}</p> }
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