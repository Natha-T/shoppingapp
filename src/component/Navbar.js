
import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import logo from '../img/hustlegang.png'
function Navbar() {
/*

       const quantité = 
        useSelector((store) => {
            console.log(store.cart.cartQuantity);
        } )
 */
        const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false


    return (
      <div className="flex items-center justify-between fixed parent w-screen p-3 px-4    bg-gray-300  ">
      <a className='ml-6' href="/">
      
       <img src={logo} alt="logo" className=" w-10 sm:w-16   "/>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 mr-6"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN text-2xl my-8 font-bold text-white flex flex-col items-center justify-between min-h-[250px] ">
              <li className="  ">
                <a href="/">Home</a>
              </li>
              <li className="  ">
                <a href="/">Produits</a>
              </li>
              <li className="  ">
                <a href="/Panier">Panier</a>
              </li>
              <li className=" ">
                <a href="/ContactP">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU  font-bold text-white  hidden space-x-40  mr-12 lg:flex ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Produits</a>
          </li>
          <li>
            <a href="/Panier">Panier</a>
          </li>
          <li>
            <a href="/ContactP">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #d9d9d9;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>

    )
}

export default Navbar;

/*

 <div className="flex items-center justify-between fixed z-50 w-screen p-3 px-4 md:px-16 md:p:6 bg-white  py-8 ">
              <a className='ml-6' href="/">
              
               <img src={logo} alt="logo" className="w-20 font-bold   "/>
              </a>
              <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                  <div
                    className="HAMBURGER-ICON space-y-2 mr-6"
                    onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                  >
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
                  </div>
        
                  <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
                    <div
                      className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                      onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                    >
                      <svg
                        className="h-8 w-8 text-gray-200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <ul className="MENU-LINK-MOBILE-OPEN text-2xl my-8 font-bold text-white flex flex-col items-center justify-between min-h-[250px]">
                      <li className="  ">
                        <a href="/">Home</a>
                      </li>
                      <li className="  ">
                        <a href="/">Produits</a>
                      </li>
                      <li className="  ">
                        <a href="/Panier">Panier</a>
                      </li>
                      <li className=" ">
                        <a href="/ContactP">Contact</a>
                      </li>
                    </ul>
                  </div>
                </section>
        
                <ul className="DESKTOP-MENU  font-bold text-white  hidden space-x-40  mr-12 lg:flex ">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Produits</a>
                  </li>
                  <li>
                    <a href="/Panier">Panier</a>
                  </li>
                  <li>
                    <a href="/ContactP">Contact</a>
                  </li>
                </ul>
              </nav>
              <style>{`
              .hideMenuNav {
                display: none;
              }
              .showMenuNav {
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
                background: #082A3A;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
              }
            `}</style>
            </div>

















/*



<div className='flex'>
<img href='/Panier' alt='panier' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABD0lEQVRIie3WvUrDUBiA4Qdx0VVBHQXvwMnJUYvg7EV4CV6N16CDdaodHARHV6V1FAWHilKtQxKs2DYn6Uk61BfOkvNx3u8n4YR5pY1Buh5wNAvxAH1s1SXPOE3lJ3WLD1Pxdd3iZfTwibWqJAsjnvXQSvf2qhKP49jvly3WusoTb1YkfswEo1oN97jLy64El3liOK9SPIldcdv8hfUQ8SJeIopvhw+f1Oo+LkIyDKQZKibunIPmm7EqqXzaNvewNHxwXsVPuCmS6RhaeCsihrMI4mZ+yF828Kp8m5+xUjbjHck1+VFA+C75wdguK51fDiS3SxeNCHHBdP3MrzNtXMjnNHMakmo62I8Q9089fAPfl7KJKlqUDwAAAABJRU5ErkJggg=="/>
        <button className="p-2 font-semibold rounded-full bg-blue-400 text-coolGray-100" >Logout</button></div>
    </div>*/