import React from 'react'

import Navbar from '../component/Navbar';
import Items from '../component/Items';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import Footer from '../component/Footer';

import { signInWithPopup } from 'firebase/auth';


import { useDispatch, useSelector} from "react-redux";
import { auth, provider } from "../firebase";

import { selectUserCart, selectUserEmail, selectUserName, setUser, setUserCart, setUserLogOut } from "../config/redux/userAuthSlice";


function Home() {


    


  const dispatch = useDispatch();


       

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userCart = useSelector(selectUserCart);



  // Sign in with google //

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        const userName = user.displayName;
        const userEmail = user.email;
        const userCart = [];
        dispatch(setUser({ userName, userEmail }));
        
      })
      .catch(error => {
        console.log(error);
      }
      );   
    }


    // Sign out //
 
    const handleSignOut = () => {
        auth.signOut().then (() => {
            dispatch(setUserLogOut());
       }  ) };



  const handleAddToCart = (item) => {
    userCart.push(item);
    dispatch(setUserCart(userCart));
    }


    return (

  
     
              <div className="App w-full h-screen">
                <button className='p-2 font-semibold rounded-full bg-blue-400 text-coolGray-100' onClick={handleSignIn}>Sign In</button>
                <button className='p-2 font-semibold rounded-full bg-blue-400 text-coolGray-100' onClick={handleSignOut}>Sign Out</button>
     <Navbar />
     <Hero/>
     <Banner/>
 
<Items  />
     <Footer/>
    </div>
     
    )
}

export default Home

/*
<div>
   {itemsData.map((item) => {
   
   
    return <Item key={item.id} item={item}/> }
   )}
    </div>*/