import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import '../App.css'


const Home = () => {

  
  return (
    <div>
          Home
          <div>
            <Link to='/maketest'> <div className='btn btn-primary' >
make Test
             </div>
             </Link>
            <Link to='/GiveTest'>
            <div className='btn btn-primary'>
Take test
             </div>
            </Link>
       
          </div>
     
    </div>
  );
};

export default Home;