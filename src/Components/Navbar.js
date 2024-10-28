import React, { useState } from 'react'
import './Navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

      const [active ,setactive] = useState('navBar')

//   function for show nav data 
      const handled=()=>{
        setactive('navBar showdata')
        
      }
    //   function for x remove nav in mediascrn
    const removenav=()=>{
        setactive('navBar')
        
      }
   
       
  return (
   <section className='navbarSection'>
    <header className='header flex'>
        <div className='logoDiv'>
            <a href="#" className='logo flex'>
                <h1><MdOutlineTravelExplore  className='icon'/><span className='navhead'>Travel</span></h1></a></div>
                
            <div className={active}>
                <ul className='navlist flex'>
                    <li className='navItem'>
                        <a href="#" className='navlingk'>Home</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navlingk'>Package</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navlingk'>Shope</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navlingk'>About</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navlingk'>Pages</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navlingk'>News</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navlingk'>Contact</a>
                    </li>
                    <button className='btn'>BookNow</button>
                </ul>

                <div onClick={removenav} className='closeNavbar'  >
                <IoIosCloseCircle  className='icon'/>
                </div>

            </div>
            
            <div className='toggleNavbar' onClick={handled}>
            <TbGridDots className='icon'  /> 
            </div>
                 </header>
   </section>
  )

}
export default Navbar
