import React from 'react'
import Image from 'next/image'

import './style.css'

const WhyUs = () => {
  return (
    <div className='why'>
      <h1>Why Us</h1>
      <div className="col">
        <div className="card">
          <Image src="/upload.jpg" height={60} width={60} layout='responsive' alt='uplad'/>
          <h2>Expertise You Can Trust</h2>
          <p>Years of experience in handling various types of licenses, from software to creative content.</p>
        </div>
        <div className="card">
          <Image src="/valuation.jpg" height={60} width={60} layout='responsive' alt='valuation'/>
          <h2> Legally Compliant</h2>
          <p> Our licenses are drafted to meet current legal standards and protect your rights.</p>
        </div>
        <div className="card">
          <Image src="/get.jpg" height={60} width={60} layout='responsive' alt='money'/>
            <h2>Fast & Efficient</h2>
            <p>Quick processing times to help you get licensed without delays.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
