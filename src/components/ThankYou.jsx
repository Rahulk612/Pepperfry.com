import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ThankYou.css'

export const ThankYou = () => {

  return (
    <div className="success">
      <img
        id="succes"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUyq4vcYZLB52jRvC44Zl1QR22uA83LdbwQ&usqp=CAU"
        alt=""
      />
      <h2>Thank you for your purchase!</h2>
      <Link to="/">
        <button id="thankyoubtn">Continue Shopping</button>{" "}
      </Link>
    </div>
  );
      
  
};
