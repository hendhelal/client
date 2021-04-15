import React from "react";
import classes from "./FormInput.module.css";

const formInput=(props)=>{

    let inputElement;
    const inputConfig=props.config.config;
    let classNames=[classes.Input,classes.InputElement];
    if(!props.config.valid && props.config.touched)
    {
        classNames.push(classes.Invalid);
    }
    classNames=classNames.join(" ");
    switch (props.config.type) {
        case "input":
            inputElement=<input className={classNames} value={props.value} {...inputConfig} onChange={(event)=>props.inputChange(event,props.id,props.config.validRules)}/>
            break;
            case "textarea":
            inputElement=<textarea className={classNames} {...inputConfig} value={props.value} onChange={(event)=>props.inputChange(event,props.id,props.config.validRules)}/>
            break;
            case "select":
            inputElement=(<select className={classNames} onChange={(event)=>props.inputChange(event,props.id)}>
                {props.config.options.map(o=> <option key={o} value={o}>{o}</option>)}
            </select>)
            break;  
        default:
            inputElement=<input className={classNames} {...inputConfig} onChange={(event)=>props.inputChange(event,props.id,props.config.validRules)}/>
            break;
    }
    return(
        <div>
            <label className={classes.Label}>{props.title}</label>
            {inputElement}
        </div>
    );

}
export default formInput;