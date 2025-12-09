import  './Cart.css'
import React, { useEffect , useState } from "react";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';
import { auth } from '../../firebase/firebase';
import {authContext} from '../../context/AuthContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export default function Cart(){
  const [address, setAddress] = useState("");

    const[open , setOpen] = useState(false)
    const[isOpen , setIsOpen] = useState(false)
    const[isOpenn , setIsOpenn] = useState(false)
    const[selectedId , setSelectedId] = useState(null)   
    const[isLoading , setIsLoading] = useState(false)   
       const navigate = useNavigate()
   
       const { cart , deleteItem , clearCart  } = useContext(CartContext)    
       const { currentUser , loadingDisplayCurrentUser } = useContext(authContext)

        //    const TotalPrice = cart.reduce((a , b)=>{
        //     return a + b.price
        //   }, 0)

          const TotalPrice = cart.reduce((a, b) => {
            return  a + +(b.price || 0)
        }, 0);

        const handleDelete = (id) => {
            setSelectedId(id)
            setIsOpen(true) 
          }
        const confirm = () =>{
             if(selectedId !== null){
               deleteItem({ id: selectedId })
             }
            setIsOpen(false)
            setSelectedId(null)
          }
          
        const cancel = () =>{
            setIsOpen(false)
            setSelectedId(null)
          }

        const handleClear = ()=>{
            setOpen(true)           
          }

        const confirmClear = () =>{
            clearCart()
            setOpen(false)
          }
        const cancelClear = () =>{
            setOpen(false)
          }

        const confirmCheckout = () =>{
            clearCart()
            setIsOpenn(false)
          }
        const cancelCheckout = () =>{
            setIsOpenn(false)
          }

 useEffect(() => {
            if (!currentUser && !loadingDisplayCurrentUser) {
                Swal.fire({
                    title: "Authentication Required",
                    text: "Please login or register to view your wishlist",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Register or Login",
                    cancelButtonText: "Cancel"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/register');
                    } else {
                        navigate('/');
                    }
                });
            }
        }, [currentUser, loadingDisplayCurrentUser, navigate])
      
       return(
           <>
           <div className="cart my-20">
               <p className='mb-5 text-center text-5xl font-semibold text-amber-500'>Your cart </p>
               <div className="container my-3">
                   { isLoading ?
                       <LottiHandeler status={"page"} />
                       :
                       cart.length === 0 ?
                       <div>
                           <p className='p-5 text-xl font-semibold text-blue-950'>Your cart is empty</p>
                           <a href='/track' className='p-5 text-amber-500'>what about choosing a track?</a>
                       </div>
                       :    
               <div className="row ml-30 w-full gap-1 max-md:ml-0">
                   {  
                    cart.map((val, id)=>{
                        return <div key={id} className="px-15 my-1 flex w-[80%] items-center justify-between rounded bg-white shadow-lg max-md:w-full">                      
                       <div className="rounded p-2">
                           <img src={val.imag}  className='h-10 w-10 rounded-full' alt="" />
                       </div>
                       <div>
                           <p className='w-full font-semibold text-blue-950'>Title : {val.title}</p>
                           <p className='w-full font-semibold text-blue-950'>Price : {val.price}</p>
                       </div>
                       <div>
                           <button onClick={()=>handleDelete(val.id)} className='cursor-pointer rounded-lg bg-red-800 p-2 text-white hover:bg-red-500 max-md:text-sm'>Remove </button>
                       </div>                                      
                   </div>
                       })                      
                   } 
                   {
                        isOpen && (
                            <div className='z-100 fixed inset-0 flex flex-col items-center justify-center gap-5 bg-black/40'>
                            <div className='flex h-1/4 w-1/3 flex-col items-center justify-center gap-5 rounded-lg bg-white max-md:w-2/3'>  
                               <p className='text-center font-semibold text-blue-950'>Are you sure to delete item?!</p>
                            <div className='flex items-center gap-1'>
                                 <button onClick={cancel} className='cursor-pointer rounded-lg bg-amber-500 px-4 py-2 text-white max-md:text-sm'>cancel</button>
                                 <button onClick={confirm} className='cursor-pointer rounded-lg bg-red-800 px-4 py-2 text-white max-md:text-sm' >confirm</button>
                            </div>
                            </div> 
                            </div>
                        )
                       }
                       <div className="px-15 my-1 flex w-4/5 items-center justify-between rounded bg-white py-1 shadow-lg max-md:w-full">                           
                           <p className='w-full font-semibold text-blue-950'>TotalPrice : {TotalPrice} </p>
                           <div className='flex gap-5'>
                              <button onClick={()=>setIsOpenn(true)} className='cursor-pointer rounded-lg bg-amber-500 p-2 text-white hover:bg-amber-400 max-md:text-sm'>Checkout </button>
                              <button onClick={handleClear} className='cursor-pointer rounded-lg bg-red-800 p-2 text-white hover:bg-red-500 max-md:text-sm'>ClearCart </button>
                           </div>
                       </div> 
                        {
                        open && (
                            <div className='z-100 fixed inset-0 flex flex-col items-center justify-center gap-5 bg-black/40'>
                            <div className='flex h-1/4 w-1/3 flex-col items-center justify-center gap-5 rounded-lg bg-white max-md:w-2/3'>  
                               <p className='text-center font-semibold text-blue-950'>Are you sure to clear cart?!</p>
                            <div className='flex items-center gap-1'>
                                 <button onClick={cancelClear} className='cursor-pointer rounded-lg bg-amber-500 px-4 py-2 text-white max-md:text-sm'>cancel</button>
                                 <button onClick={confirmClear} className='cursor-pointer rounded-lg bg-red-800 px-4 py-2 text-white max-md:text-sm' >confirm</button>
                            </div>
                            </div> 
                            </div>
                        )
                       }

                        {
                        isOpenn && (
                            <div className='z-100 fixed inset-0 flex flex-col items-center justify-center gap-5 bg-black/40'>
                            <div className='flex h-3/4 w-2/3 flex-col items-center justify-center gap-5 rounded-lg bg-white max-md:h-3/4 max-md:w-4/5'>  
                               <p className='text-center font-semibold text-blue-950'>Confirm your order</p>
                              <div>
                              <form onSubmit={(e)=>e.preventDefault} className='flex flex-col'>
                                <div className='mb-4 flex gap-2 max-md:flex-col'>
                                  <div className='flex w-full items-center justify-between p-2 shadow-lg'>
                                    <label className='font-semibold text-blue-700'>E-mail :</label>                          
                                    <input type="email" defaultValue={currentUser?.email} />
                                  </div>
                                  <div className='flex w-full items-center justify-between p-2 shadow-lg'>
                                    <label className='font-semibold text-blue-700'>Phone:</label>
                                    <input type="text" defaultValue={currentUser?.phone} />
                                  </div>
                                  </div>
                                  <label className='font-semibold text-blue-700'>Shipping Address :</label>
                                  <textarea  value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className='w-full rounded border border-gray-300 p-2' placeholder='Enter your shipping address here...'></textarea>

                              </form>
                              </div>
                            <div className='flex items-center gap-1'>
                                 <button onClick={cancelCheckout} className='cursor-pointer rounded-lg bg-amber-500 px-4 py-2 text-white max-md:text-sm'>cancel</button>
                                 <button disabled={!address.trim()}
                                   onClick={confirmCheckout}  className={`max-md:text-md rounded-lg px-4 py-2 text-white
                                   ${address.trim() ? "cursor-pointer bg-red-800" : "cursor-not-allowed bg-red-300"}`} >confirm</button>
                            </div>
                            </div> 
                            </div>
                        )
                       }
               </div>
             }
            </div>
      </div>
   </>
       )
   }