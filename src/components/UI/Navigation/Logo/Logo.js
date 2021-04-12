import React from 'react';
import logo from '../../../../assets/auctionLogo.png'
import classes from './Logo.module.css';
const Logo=(props)=>{

    return (
      <div className={classes.Logo}>
     <img src={logo}/>
      </div>
    );

}

export default Logo;