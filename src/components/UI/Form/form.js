import React from "react";
import Button from "../Button/Button";
import classes from "./form.module.css";
import FormInput from "./FormInput/FormInput";

const Form =(props)=>{

    let formElements=props.fieldsData.map(f=>{
        return <FormInput key={f.id} {...f} inputChange={props.inputChange} />
    });
 
    return(
        <form onSubmit={props.click}>
            {formElements}
            <div className={classes.BtnContainer}> 
             <Button type="Success" disabled={!props.formValid}>{props.btnText}</Button>
             {props.cancelBtn? <Button type="Danger" click={props.cancelHandler} disabled={!props.formValid}>Cancel</Button>:null}
             </div>
          
        </form>
    );

}
export default Form;