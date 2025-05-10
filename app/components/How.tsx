import React from 'react'
import './style.css'
import Image from 'next/image'

const Working = () => {
  return (
    <div className='work'>
      <h1>How It Works</h1>
      <div className="col">
        <div className="card">
          <Image src="/upload.jpg" height={70} width={70} layout='responsive' alt='upload'/>
          <h2>Upload Images</h2>
          <p>Upload Image from your local computer.</p>
        </div>
        <div className="card">
          <Image src="/valuation.jpg" height={70} width={70} layout='responsive' alt='valuation'/>
          <h2>Get	Valuation</h2>
          <p>Get your liscence validated within minutes</p>
        </div>
        <div className="card">
          <Image src="/get.jpg" height={70} width={70} layout='responsive' alt="done"/>
            <h2>Get	Paid</h2>
            <p>Whether you're a freelancer, content creator, or online seller</p>
            &apos;
        </div>
      </div>
    </div>
  )
}

export default Working
