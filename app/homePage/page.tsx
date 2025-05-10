import React from 'react'
import './style.css'
import Image from 'next/image'
const HomePage = () => {
  return (
    <div className='home'>
      <div className="cont">
        <div className="left">
          <Image src="/man.jpg" height={350} width={300} layout='responsive' alt='image'/>
        </div>
        <div className="right">
          <h1>SoftSell</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime adipisci laboriosam reprehenderit fuga eum obcaecati consequatur, quo autem hic dolorum impedit modi expedita, quisquam quasi unde ullam officiis ducimus!</p>
          <button>Get a Quote</button>
        </div>
      </div>
        
      
    </div>
  )
}

export default HomePage
