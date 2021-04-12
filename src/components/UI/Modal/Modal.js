import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from './Modal.module.css';
const Modal=(props)=>{

    return(
        <Fragment>
            <Backdrop  click={props.click} show={props.show}/>
            <div className={classes.Modal} style={{transform:props.show? 'translateY(0)':'translateY(-100vh)'}}>
            {props.children}
        </div>
        </Fragment>
     
    );
}
export default Modal;