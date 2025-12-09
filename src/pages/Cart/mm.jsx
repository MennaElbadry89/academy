                                 {
                                 cartItems.length === 0 ? ( <p className='text-blue-700'> Fill your cart to checkout </p>) : (
                                 <>
                                 <ul>
                                {cartItems.map((item)=>(
                                 <li key={item.id} className="flex items-center justify-between p-2 shadow-lg">
                                <span>{item.title}  <span className='text-red-500'>* {item.quantity} </span> </span> <span>{item.price * item.quantity} $</span>
                                 </li> ))}
                                 </ul>
                             <div className='flex items-center justify-between p-2 shadow-lg'>
                                  <span className="">Total: </span><span>{totalPrice} $</span>
                             </div>
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
                              </>
                                 )
                                }
                            