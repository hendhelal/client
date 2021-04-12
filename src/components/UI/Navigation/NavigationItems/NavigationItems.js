import React from 'react';

import NavigationItem from './NavigationItem/NaviagtionItem';
import classes from './NavigationItems.module.css'
const NavigationItems=(props)=>{

    return (
 <ul className={classes.NavigationItems}>
      <NavigationItem link="/" >Auction</NavigationItem>
     <NavigationItem link="/login">Login</NavigationItem>
     <NavigationItem link="/admin">admin</NavigationItem>


 </ul>
    );

}

export default NavigationItems;