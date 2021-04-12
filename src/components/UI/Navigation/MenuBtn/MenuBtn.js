import React from 'react';
import classes from './MenuBtn.module.css';

const MenuBtn=(props)=>{

    return (
  <div className={classes.MenuBtn} onClick={props.click}>
      <div></div>
      <div></div>
      <div></div>

  </div>
    );

}

export default MenuBtn;