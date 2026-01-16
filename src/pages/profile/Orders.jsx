import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import LottiHandeler from "../../assets/Lottifiles/LottiHandeler";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, "orders");
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersList = ordersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <LottiHandeler />;

  return (
    <div className="bg-gray-50 p-10">
      <h1 className="my-5 text-center text-2xl font-bold text-amber-500 md:text-4xl">Orders</h1>
      
      {orders.length === 0 && <p className="my-5 text-center text-2xl font-bold text-amber-500 md:text-4xl">No orders found</p>}
      
      <div className="mx-auto my-2 flex w-full flex-col rounded border border-gray-300 p-10 md:w-2/3">
        {orders.map((order) => (
        <div key={order.id} className="border-b border-gray-300 p-3" >
          <p><strong>Order No:</strong> {order.id}</p>
          <p><strong>Address:</strong> {order.address}</p>
          <p><strong>Total Price:</strong> {order.totalPrice} EGP</p>
          <p><strong>Created At:</strong> {order.createdAt.toDate ? order.createdAt.toDate().toString() : order.createdAt}</p>
          <div>
            <strong>Items:</strong>
            <ul>
              {order.items?.map((item, index) => (
                <li key={index}  className="flex items-center">
                  <div className="my-1 flex w-full items-center justify-between">
                  <img src={item.image} alt={item.title} className="h-10 w-10" />
                  <p> {item.title} - ${item.price} </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
}
