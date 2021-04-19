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
     {auth.isLoggedIn && auth.isAdmin?<NavigationItem link="/admin">admin</NavigationItem>:null}
     {auth.isLoggedIn?<NavigationItem clickHandler={auth.logout} link="./login">Logout</NavigationItem>:null}



 </ul>
    );

}

export default NavigationItems;