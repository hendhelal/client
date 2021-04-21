import classes from "./Backdrop.module.css";
const Backdrop=(props)=>{
let classeNames=[classes.Backdrop];
    if(props.show)
    {
classeNames.push(classes.Show);
    }
    else{
        classeNames.push(classes.Hide);
    }
    return(
        <div className={classeNames.join(' ')}  onClick={props.click}>
            {props.children}
        </div>
    );
}
export default Backdrop;