import React, { useEffect } from "react";
import opn1 from '/images/opn1.jpg'
import opn2 from '/images/opn2.jpg'
import opn3 from '/images/opn3.jpg'
import opn4 from '/images/opn4.jpg'
import opn5 from '/images/opn5.jpg'
import opn6 from '/images/opn6.jpg'
import opn7 from '/images/opn7.jpg'
import opn8 from '/images/opn8.jpg'
import opn10 from '/images/opn10.jpg'
import opn11 from '/images/opn11.jpg'
import opn9 from '/images/opn9.jpg'
import opn12 from '/images/opn12.jpg'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function KeenSlider(){
    const images = [opn1, opn2, opn3, opn4, opn5, opn6, opn7, opn8, opn9, opn10, opn11, opn12];
    const [sliderRef , instanceRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        vertical: true,
        slides: {
          perView: 1,
            spacing: 15,
        },
        breakpoints: {
          "(max-width: 768px)": {
            slides: { perView: 1, spacing: 15 },
          },
        },
    })

    useEffect(() => {
        if (instanceRef.current) {
          const interval = setInterval(() => {
            instanceRef.current.next();
          }, 3000); 
          return () => clearInterval(interval);
        }
        }, [instanceRef]);
    return(
        <div className="flex items-center justify-center">
            <div>
                <div ref={sliderRef} className="keen-slider h-80 w-72">
                       {images.map((src, index) => (
                        <div key={index} className="keen-slider__slide flex items-center justify-center">
                         <div className="h-full w-full"><img  src={src} alt={`Image ${index + 1}`} 
                          className="h-full w-full rounded-lg border border-amber-500 object-cover" />
                         </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}