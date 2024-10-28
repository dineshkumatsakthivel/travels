import React from 'react'
import './Datadiv.css'

const Datadiv = () => {

    const data =[
        {
        img:"beach.jfif",
        dis:"Beach loaciton areas",
        loac:"TamilNadu",
        pack:"$ 14000",
        country:"India",

    },
    {
        img:"isha.jpg",
        dis:"isha shiva temple",
        loac:"coimbatore",
        pack:"$ 5000",
        country:"India",

    },    {
        img:"beach3.jfif",
        dis:"Like clean beach",
        loac:"Goa",
        pack:"$ 7000",
        country:"India",

    },    {
        img:"beach1.webp",
        dis:"beach are like so see",
        loac:"goa",
        pack:"$ 6788",
        country:"india"

    },    {
        img:"maruthamalai.jfif",
        dis:"murugan temple",
        loac:"coimbatore",
        pack:"$900",
        country:"india",

    },  
    
]
  return (
    <div className='showdatas'>
        {data.map((v,index)=>{

      return( 
        <div key={index} className='gridbox'>
 
            <div className="imgdiv1"><img  src={require(`../travel/${v.img}`)} alt="" /></div>
            <div className="dis">{v.dis}</div>
            <div className="loca">{v.loac}</div>
            <div className="pric">{v.pack}</div>
            <div className="con">{v.country}</div>

            
            
            </div> )
              })}
      
    </div>
  )
}

export default Datadiv
