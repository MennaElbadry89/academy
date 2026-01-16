import { lazy , Suspense } from 'react';
import LottiHandeler from "./assets/Lottifiles/LottiHandeler";
// import toast, { Toaster } from 'react-hot-toast';

import { createBrowserRouter , RouterProvider} from  'react-router-dom'
const Layout = lazy(()=> import('./Layout/Layout'))
const Home = lazy(()=> import('./pages/Home/Home'))
const About = lazy(()=> import('./pages/About/About'))
const Contact = lazy(()=> import('./pages/Contact/Contact'))
const Team = lazy(()=> import('./pages/team/Team'))
const Track = lazy(()=> import('./pages/track/Track'))
const Cart = lazy(()=> import('./pages/Cart/Cart'))
const Register = lazy(()=> import('./pages/auth/Register'))
const Login = lazy(()=> import('./pages/auth/Login'))
const Profile = lazy(()=> import('./pages/profile/Profile'))
const Orders = lazy(()=> import('./pages/profile/Orders'))


export default function App(){
const router = createBrowserRouter([
    {
      path : '/',
        element : <Suspense fallback={<LottiHandeler status= 'main' />}><Layout/></Suspense>,
    children : [
      {index: true , element :
                <Suspense fallback={<LottiHandeler status= 'main' />}> <Home/></Suspense> },
      {path: 'about' , element :
                <Suspense fallback={<LottiHandeler status= 'page' />}> <About/></Suspense> },
      {path: 'team' , element :
                <Suspense fallback={<LottiHandeler status= 'page' />}> <Team/></Suspense> },
      {path: 'track' , element :
                <Suspense fallback={<LottiHandeler status= 'page' />}> <Track/></Suspense> },
      {path: 'contact' , element :
                <Suspense fallback={<LottiHandeler status= 'page' />}> <Contact/></Suspense>},
      {path: 'cart' , element :
                <Suspense fallback={<LottiHandeler status= 'cart' />}> <Cart/></Suspense> },
      {path: 'register' , element :
                <Suspense fallback={<LottiHandeler status= 'page' />}> <Register/></Suspense> },
      {path: 'login' , element :
                <Suspense fallback={<LottiHandeler status= 'page' />}> <Login/></Suspense> },
      {path: 'profile' , element :
                <Suspense fallback={<LottiHandeler status= 'page' />}> <Profile/></Suspense> },
      {path: 'orders' , element :
                <Suspense fallback={<LottiHandeler status= 'page' />}> <Orders/></Suspense> }
    ],
    errorElement : <LottiHandeler status= 'Err' />
  }
])
    return <RouterProvider router={router}/>

}