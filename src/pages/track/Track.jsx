import './Track.css'
import img from '/images/66.png'
import front from '/images/front.png'
import back from '/images/back.png'
import flutter from '/images/ff.webp'
import cyper from '/images/cyber.jpg'
import net from '/images/net.jpg'
import analy from '/images/analy.jpg'
import data from '/images/data.jpg'
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination , Navigation , Autoplay} from "swiper/modules";
import 'swiper/css/autoplay';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { authContext } from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import Swal from "sweetalert2";



export default function Track(){
  
  const {cart , addToCart} = useContext(CartContext);
  const {currentUser} = useContext(authContext);
  const navigate = useNavigate();
  
const cards = [
  {id: 1, 
    title: "programming fundamentals", 
    imag: img, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 1500
  },
  {id: 2, 
    title: "Front-End", 
    imag: front, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 3500
},
  {id: 3, 
    title: "Back-End", 
    imag: back, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 3000
},
  {id: 4, 
    title: "Flutter", 
    imag: flutter, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 3500
},
 {id: 5, 
    title: "Cyber Security", 
    imag: cyper, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 6000
  },
  {id: 6, 
    title: "network fundamentals", 
    imag: net, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 4000
},
  {id: 7, 
    title: "data analysis", 
    imag: analy, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 3000
},
  {id: 8, 
    title: "database", 
    imag: data, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 2000
}
]

  const handleAddToCart = (card) => {
  if (!currentUser) {
    Swal.fire({
      icon: "warning",
      title: "Login Required",
      text: "Please login to add items to cart",
      showCancelButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
    return;
  } else {
    addToCart(card);

    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: "Item has been added successfully 🛒",
      timer: 1500,
      showConfirmButton: false,
    });
  }
};

    
    
    
    
    return(
        <>
        <div className="Track my-0 bg-gray-100 px-10 md:px-20">
            <h1 className="mb-5 p-5 text-2xl font-semibold text-amber-500 md:text-4xl"> Available Tracks : </h1>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination , Navigation , Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // 1024: {
          //   slidesPerView: 4,
          //   spaceBetween: 50,
          // },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="mx-auto mb-10 max-w-sm overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="h-48 w-full overflow-hidden">
                <img className="h-full w-full object-cover" src={card.imag} alt={card.title}/>
              </div>
              <div className="px-6 py-4">
                <div className="text-md font-bold text-amber-500">{card.title}</div>
                <p className="my-2 text-sm text-gray-700"> {card.desc} </p>
                <p className="text-md text-gray-950"> {card.price} EGP </p>
              </div>
              <div className="px-6 py-2">
                <button className="w-full cursor-pointer rounded-lg bg-amber-500 p-2 text-white hover:bg-amber-300"  
                  onClick={() => handleAddToCart(card)}
                  disabled={cart.find(item => item.id === card.id)}>    
                  {cart.find(item => item.id === card.id) ? "On Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  </div>
  </>
  )
}