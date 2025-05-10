import React from 'react'

const Contact = () => {
  return (
    <div className='contact-info'>
        <h1>Contact Us</h1>
        <div className="form-container">
          <div className="info">
            <h2>Discuss your License Need with us.</h2>
            <p>&#x260E; 1112223334</p>
            <p>&#128231; info@softshell.com</p>
          </div>
          <div className="contact">
            <form action="" className='c_form'>
                <p>Name</p>
                <input type="text" />
                <p>email</p>
                <input type="email" />
                <p>Company</p>
                <input type="text" />
                
                <br />
                <p>License Type:</p>
                <select id="type" name="type">
                    <option value="t1">Type 1</option>
                    <option value="t2">Type 2</option>
                    <option value="t3">Type 3</option>
                    <option value="t4">Type 4</option>
                </select>
                <p>Message</p>
                <textarea name="message" />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>


        </div>
        
      
    </div>
  )
}

export default Contact
