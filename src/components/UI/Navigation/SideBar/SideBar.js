import classes from './SideBar.module.css';
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Backdrop/Backdrop'

const SideBar=(props)=>{
    let classeNames=[classes.SideBar];
    if(props.open)
    {
        classeNames.push(classes.Open);
    }
    else{
        classeNames.push(classes.Closed);
    }
    return (
        <div onClick={props.click}>
            <Backdrop show={props.open}/>
     <div className={classeNames.join(' ')}>
       <div className={classes.Logo}>
       <Logo/>
       </div>
         
         <nav ><NavigationItems/></nav>
     </div>
        </div>

    );

}

export default SideBar;