import React from 'react';
import classes from './ToolBar.module.css';
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuBtn from '../MenuBtn/MenuBtn';
const ToolBar=(props)=>{

    return (
     <header className={classes.ToolBar}>
         <MenuBtn click={props.click}/>
         <Logo/>
         <nav className={classes.DesktopOnly}><NavigationItems/></nav>
     </header>
    );

}

export default ToolBar;