import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/authContext';

import NavigationItem from './NavigationItem/NaviagtionItem';
import classes from './NavigationItems.module.css'
const NavigationItems=(props)=>{
    const auth=useContext(AuthContext);
  
    return (
 <ul className={classes.NavigationItems}>
       
     {auth.isLoggedIn?<NavigationItem link="/" >Auction</NavigationItem>:null} 
     {!auth.isLoggedIn?<NavigationItem link="/login">Login</NavigationItem>:null}
     {auth.isLoggedIn?<NavigationItem link="/admin">admin</NavigationItem>:null}
     {auth.isLoggedIn?<a onClick={auth.logout}>Logout</a>:null}



 </ul>
    );

}

export default NavigationItems;