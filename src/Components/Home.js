import React from 'react'
import './Home.css'
import video from '../travel/70549-535363124_small.mp4'
import { MdEditLocationAlt } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiArrowLoopOutline } from "react-icons/ti";
import { FaList } from "react-icons/fa";

function Home() {
  return (
    <section className='homemain'>
      <div className='cover'></div>
      <video src={video} muted autoPlay loop type='70549-535363124_small.mp4' ></video>
      <div className='Homecontent container'>
        <div className='textcontent'>
          <span className='smalltext'>
            Our Package
          </span>
          <h1 className='Homeheading'>
            Search Your Holidays
          </h1>

          
        </div>
        <div className='searchinput grid'>
            <div className='inputbox '>
              <div className='cityserach'>
                <label htmlFor='city' className='citylabel flex'>Search Your desitination</label>
                <input className='input'  type="text" placeholder='Enter your Name....'  /><MdEditLocationAlt style={{fontSize:"25px"}} />
              </div>
              <div className='dateset'>
                <label htmlFor='date' className='date flex'>Search Your desitination</label>
                <input className='input'  type="date" placeholder='Enter your Name....'  />
              </div>
              <div className='priceset'>
                <label htmlFor='pirce' className='pirce flex'>Max - price:<h1>5000$</h1></label>
                <input className='input' type="range" max={"5000"} min={"1000"} ></input>
              </div>

              <div className='searchfilter felx'>
                <span> <CiFilter className='icon filtericon' />Serach filter</span>
              </div>
              <div className='homefooter flex'>
                <div className='rigthicon'>
                <FaFacebook  className='footicon' />
                <FaInstagram className='footicon'/>
                <FaXTwitter className='footicon'/>
                </div>
                <div className='lefticon'>
                  <TiArrowLoopOutline className='footicon'/>
                  <FaList className='footicon'/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Home
