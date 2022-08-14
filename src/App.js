
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { collection, onSnapshot } from "firebase/firestore";
import {db} from "./firebase";
import { auth, provider } from "./firebase";


import { onAuthStateChanged } from "firebase/auth";


import Panier from "./page/Panier";
import ContactP from "./page/ContactP";
import Home from "./page/Home";


import { useDispatch, useSelector} from "react-redux";
import { setItemData } from "./config/redux/itemSlice";
import { setUser, setUserCart, selectUserEmail, selectUserName, setUserLogOut, selectUserCart } from "./config/redux/userAuthSlice";
 


function App() {





  const dispatch = useDispatch();

  
// Fetching product from firebase and storing it in the redux store //
  useEffect(() => {
 const items = onSnapshot(collection(db, "Product"), (snapshot) => {
   dispatch(setItemData((snapshot.docs.map((doc) => doc.data()))))
   ;})

  return items

 },)



/*
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userCart = useSelector(selectUserCart);
*/

//  State of the user //

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userName = user.displayName;
      const userEmail = user.email;
      const userCart = [];
      dispatch(setUser({ userName, userEmail }));
      /*dispatch(setUserCart(userCart));*/
    } else {
      dispatch(setUserLogOut());
    }
  }
  );
}
, [dispatch]);



  return (

    <BrowserRouter>
    <Routes >
      <Route path="/" element={<Home />}/>
      

     


      <Route path="/Panier" element={<Panier/> }/>


      <Route path="/ContactP" element={<ContactP />}/>
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;








/*



function App() {

  const [produit, setProduit] = useState([]);

 useEffect(() => {
 const items = onSnapshot(collection(db, "Product"), (snapshot) => {
  setProduit(snapshot.docs.map((doc) => doc.data()));})
 
return items

},[])


  return (
    <div className="App w-full h-screen">
     <Navbar/>
     <Hero/>
     <Banner/>
     <Item  produit={produit}/>
     
     <Footer/>
    </div>
  );
}

export default App;
*/