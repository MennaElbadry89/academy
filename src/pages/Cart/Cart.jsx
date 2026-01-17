import  './Cart.css'
import { useEffect , useState } from "react";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';
import {authContext} from '../../context/AuthContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase/firebase';


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
       
       console.log("currentUser", currentUser);


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

        // const confirmCheckout = () =>{
        //     clearCart()
        //     setIsOpenn(false)
        //   }
        
 const confirmCheckout = async () => {
  try {
    setIsLoading(true);

    const orderData = {
      userId: currentUser.id,
      email: currentUser.email,
      phone: currentUser.phone || "",
      address: address,
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.imag,
      })),
      totalPrice: TotalPrice,
      status: "pending",
      createdAt: serverTimestamp(),
    };
    await addDoc(collection(db, "orders"), orderData);

    Swal.fire({
      icon: "success",
      title: "Order placed successfully",
      text: "Your order has been saved",
    });
    clearCart();
    setAddress("");
    setIsOpenn(false);

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Order failed",
      text: error.message,
    });
  } finally {
    setIsLoading(false);
  }
};

        
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
                       <div className='flex flex-col'>
                           <p className='p-5 text-center text-xl font-semibold text-blue-950'>Your cart is empty</p>
                           <a href='/track' className='p-5 text-center text-amber-500'>what about choosing a track?</a>
                       </div>
                       :    
               <div className="row md:ml-30 ml-0 w-full gap-1">
                   {  
                    cart.map((val, id)=>{
                        return <div key={id} className="mx-auto my-1 flex w-full items-center justify-between rounded bg-white px-5 shadow-lg md:w-4/5 md:px-10">                      
                       <div className="rounded p-2">
                           <img src={val.imag}  className='h-10 w-10 rounded-full' alt="" />
                       </div>
                       <div>
                           <p className='w-full font-semibold text-blue-950'>Title : {val.title}</p>
                           <p className='w-full font-semibold text-blue-950'>Price : {val.price} EGP </p>
                       </div>
                       <div>
                           <button onClick={()=>handleDelete(val.id)} className='cursor-pointer rounded-lg bg-red-800 p-2 text-sm text-white hover:bg-red-500'>Remove </button>
                       </div>                                      
                   </div>
                       })                      
                   } 
                   {
                        isOpen && (
                            <div className='fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-black/40'>
                            <div className='flex w-2/3 flex-col items-center justify-center gap-5 rounded-lg bg-white p-5 md:h-1/4 md:w-1/3'>  
                               <p className='text-center font-semibold text-blue-950'>Are you sure to delete item?!</p>
                            <div className='flex items-center gap-1'>
                                 <button onClick={cancel} className='cursor-pointer rounded-lg bg-amber-500 p-2 text-sm text-white'>cancel</button>
                                 <button onClick={confirm} className='cursor-pointer rounded-lg bg-red-800 p-2 text-sm text-white' >confirm</button>
                            </div>
                            </div> 
                            </div>
                        )
                       }
                       <div className="mx-auto my-1 flex w-full items-center justify-between rounded bg-white px-5 py-2 shadow-lg md:w-4/5 md:px-10">                           
                           <p className='w-full font-semibold text-blue-950'>TotalPrice : {TotalPrice} EGP </p>
                           <div className='flex gap-5'>
                              <button onClick={()=>setIsOpenn(true)} className='cursor-pointer rounded-lg bg-amber-500 p-2 text-sm text-white hover:bg-amber-400'>Checkout </button>
                              <button onClick={handleClear} className='cursor-pointer rounded-lg bg-red-800 p-2 text-sm text-white hover:bg-red-500'>ClearCart </button>
                           </div>
                       </div> 
                        {
                        open && (
                            <div className='fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-black/40'>
                            <div className='flex w-2/3 flex-col items-center justify-center gap-5 rounded-lg bg-white p-5 md:h-1/4 md:w-1/3'>  
                               <p className='text-center font-semibold text-blue-950'>Are you sure to clear cart?!</p>
                            <div className='flex items-center gap-1'>
                                 <button onClick={cancelClear} className='cursor-pointer rounded-lg bg-amber-500 p-2 text-sm text-white'>cancel</button>
                                 <button onClick={confirmClear} className='cursor-pointer rounded-lg bg-red-800 p-2 text-sm text-white' >confirm</button>
                            </div>
                            </div> 
                            </div>
                        )
                       }

                        {
                        isOpenn && (
                            <div className='fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-black/40'>
                            <div className='mx-5 flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-5 md:h-4/5 md:w-2/3'>  
                               <p className='text-center font-semibold text-blue-950'>Confirm your order</p>
                              <div>
                                 {  
                                   cart.map((val, id)=>{
                                    return <div key={id} className="my-1 flex w-full items-center justify-between rounded bg-white px-10 shadow-lg max-md:w-full">                      
                                      <div className="h-10 w-10 rounded p-2">
                                         <img src={val.imag}  className='h-full w-full' alt="" />
                                      </div>
                                    <div >
                                       <p className='md:text-md line-clamp-2 text-sm font-semibold text-blue-950'>{val.title}</p>
                                    </div> 
                                    <div> 
                                       <p className='md:text-md text-sm font-semibold text-blue-950'>${val.price}</p>
                                    </div>
                                    </div>                                     
                                      })                      
                               }
                               
                              <form onSubmit={(e)=>e.preventDefault} className='flex flex-col'>
                                <div className='mb-4 flex flex-col gap-2 md:flex-row'>
                                  <div className='flex w-full items-center justify-between p-2 shadow-lg'>
                                    <label className='font-semibold text-blue-700 max-md:text-sm'>E-mail :</label>                          
                                    <input type="email" defaultValue={currentUser?.email} />
                                  </div>
                                  <div className='flex w-full items-center justify-between p-2 shadow-lg'>
                                    <label className='font-semibold text-blue-700 max-md:text-sm'>Phone:</label>
                                    <input type="text" defaultValue={currentUser?.phone} />
                                  </div>
                                  </div>
                                  <label className='font-semibold text-blue-700 max-md:text-sm'>Shipping Address :</label>
                                  <textarea  value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className='w-full rounded border border-gray-300 p-2' placeholder='Enter your shipping address here...'></textarea>
                              </form>
                              </div>
                            <div className='flex items-center gap-1'>
                                 <button onClick={cancelCheckout} className='cursor-pointer rounded-lg bg-amber-500 p-2 text-sm text-white'>cancel</button>
                                 <button disabled={!address.trim()}
                                   onClick={confirmCheckout}  className={`rounded-lg p-2 text-sm text-white
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