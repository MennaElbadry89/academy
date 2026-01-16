import React from 'react'
import { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";


const people = [
  { 
    id: 1,
    name: 'Instructor 1 ',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/team1.jpg'
  },
  { 
    id: 2,
    name: 'Instructor 2',
    role: 'Flutter Developer',
    imageUrl: '/images/team2.jpg'
  },
  { 
    id: 3,
    name: 'Instructor 3',
    role: 'Back-end Developer',
    imageUrl: '/images/team3.jpg'
  },
  { 
    id: 4,
    name: 'Instructor 4',
    role: 'Front-end Developer',
    imageUrl: '/images/team4.jpg'
  },
  {
    id: 5,
    name: 'Instructor 5',
    role: 'UI/UX Designer',
    imageUrl: '/images/team5.png'
  },
  { 
    id: 6,
    name: 'Instructor 6',
    role: 'Network Engineer',
    imageUrl: '/images/team4.jpg'
  },
  {
    id: 7,
    name: 'Instructor 7',
    role: 'UI/UX Designer',
    imageUrl: '/images/team5.png'
  },
]

export default function Team() {
  const [open, setOpen] = useState(false)
  const [selectedPerson , setSelectedPerson] = useState(null);

 const handleOpen = (person)=>{
    setSelectedPerson(person)
    setOpen(true)
  }

  return (
    <div className="bg-gray-100 px-10 py-10 md:px-20">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-amber-500 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="text-1/16 mt-6 text-blue-950 sm:text-lg/8">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-3 xl:col-span-2">
          {people.map((person) => (
            <li key={person.id}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl}
                  className="md:size-20 size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"/>
                <div>
                  <h3 className="cursor-pointer text-xl font-semibold tracking-tight text-amber-500"
                      onClick={()=> handleOpen(person)}>{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-blue-950" >{person.role}</p>
               
                  { open && selectedPerson && ( 
                    <div  className="z-100 fixed inset-0 flex items-center justify-center overflow-y-auto bg-black/30">
                     <div className='mx-10 flex w-full flex-col gap-5 rounded-xl bg-white p-10 md:mx-0 md:w-1/2'>
                       <div className='flex items-center justify-between'>
                        <h2 className='font-semibold text-amber-500'>{selectedPerson.name}</h2>
                        <button className="w-15 h-15 flex cursor-pointer items-center justify-center p-2 text-2xl text-red-700"
                                 onClick={()=> setOpen(false)}><IoIosCloseCircle/></button>
                        </div> 
                      <hr />
                      <p className='text-blue-950'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aspernatur alias magni eius ipsum dolore quisquam at, eos et rem cumque laborum adipisci necessitatibus fugit commodi tempora repellat veniam deserunt voluptas?</p>                     
                      </div>
                    </div>
                  )
                  }
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
