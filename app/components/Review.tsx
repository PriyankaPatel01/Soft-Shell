import React from 'react'
import Image from 'next/image'


const Reviews = () => {
  return (
    <div className='reviews'>
        <h1>Customer Testimonials</h1>

        <div className="contain">
          <div className="container">
            <div className="img">
               <Image src="/prof.png" alt='profile' fill={true}/>
            </div>
            <h3>Company</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero enim libero eum quod, unde provident error suscipit alias. Totam fugiat atque beatae exercitationem dolores. Quo, fugit. Rem mollitia ipsa ipsam?</p>
        </div>
        <div className="container">
          <div className="img">
               <Image src="/prof.png" alt='profile' fill={true}/>
            </div>
            <h3>Company</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro qui, quaerat, numquam aut placeat minus voluptatem accusantium consequatur molestias ad quia quidem, iste distinctio ratione veniam quae. Facilis, suscipit quidem.</p>
        </div>
        </div>
        
    </div>
  )
}

export default Reviews
