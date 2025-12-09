import React from "react";
import './Track.css'
import img from '/images/66.png'
import front from '/images/front.png'
import back from '/images/back.png'
import flutter from '/images/ff.webp'
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination , Navigation , Autoplay} from "swiper/modules";
import 'swiper/css/autoplay';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export default function Track(){
  const {cart , addToCart} = useContext(CartContext);
const cards = [
  {id: 1, 
    title: "Fundamentals of programming", 
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
}
]
    return(
        <>
        <div className="Track my-0 bg-gray-100 px-20 max-md:px-10">
            <h1 className="mb-5 p-5 text-5xl font-semibold text-amber-500 max-md:text-2xl"> Available Tracks : </h1>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="mx-auto mb-10 max-w-sm overflow-hidden rounded-xl bg-white shadow-lg">
              <img className="w-full" src={card.imag} alt={card.title}/>
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold text-amber-500">{card.title}</div>
                <p className="text-base text-gray-700"> {card.desc} </p>
              </div>
              <div className="px-6 pb-2 pt-4">
                <button className="w-full cursor-pointer rounded-lg bg-amber-500 p-2 text-white hover:bg-amber-300"  
                  onClick={() => addToCart(card)}
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