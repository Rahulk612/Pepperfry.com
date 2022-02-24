import React from 'react';
import {Link} from 'react-router-dom'
import './ThankYou.css'

export const ThankYou = () => {

  return <div className='success'> 
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUyq4vcYZLB52jRvC44Zl1QR22uA83LdbwQ&usqp=CAU" alt="" />
        <h2>Thank you for your purchase!</h2>
        <Link id="btn" to="/">Continue Shopping</Link>
       
  </div>;
};
