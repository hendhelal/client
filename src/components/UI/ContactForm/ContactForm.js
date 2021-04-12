import React from "react";
import Button from "../Button/Button";
import classes from "./ContactForm.css";
import FormInput from "./FormInput/FormInput";

const contactForm=(props)=>{

    let formElements=props.fieldsData.map(f=>{
        return <FormInput key={f.id} {...f} inputChange={props.inputChange} />
    });
 
    return(
        <form onSubmit={props.click}>
            {formElements}
            <div className={classes.BtnContainer}>  <Button type="Success" disabled={!props.formValid}>Order</Button></div>
          
        </form>
    );

}
export default contactForm;