import { Component, Fragment } from "react";
import withErrorHandler from './../withErrorHandler';
import * as actions from './../../store/actions/index';
import { connect } from "react-redux";
import axios from './../../auction-axios';
import Spinner from './../../components/UI/Spinner/Spinner'
import classes from "./admin.module.css";
import ItemsTable from "../../components/itemsTable/itemsTable";
import AddItem from "./addItem";
class Admin extends Component {

    state={
        formVisible:false,
        btnText:"Add Item",
        cancelBtn:false,
        selectedItem:null
    }
    componentDidMount() {
        this.props.init();
    }
    editBtnHandler=(item)=>{
        
        var date = new Date(item.endDate).toISOString().substr(0, 16)
        let selectedItem={...item,image:"",endDate:date};
        this.setState({btnText:"Update Item",cancelBtn:true, selectedItem:selectedItem});
        this.setState({formVisible:true});
    }
    cancelBtnHandler=()=>{
        this.setState({ btnText:"Add Item",cancelBtn:false,formVisible:false,selectedItem:null});
    }
    clickBtnHandler=(item)=>{
        if(this.state.btnText.includes("Add"))
        {
            this.props.addItem(item);
        }
        else{
            let id=this.state.selectedItem.id;
            this.props.editItem(id,item);
        }
    }

    render() {
        if (this.props.items) {
            return (
                <Fragment>
                   
                    { this.state.formVisible? <AddItem formData={this.state.selectedItem? this.state.selectedItem:null} click={this.clickBtnHandler} cancelHandler={this.cancelBtnHandler} cancelBtn={this.state.cancelBtn} btnText={this.state.btnText}/>
                    :<button onClick={()=>this.setState({formVisible:true})}>AddUser</button> }
                  <ItemsTable items={this.props.items} deleteClick={this.props.deleteItem} editClick={this.editBtnHandler}/>

                </Fragment>
            )
        }
        else {
            return <Spinner />
        }

    }
}
const mapStateToProps = state => {
    return {
        items: state.items.items
    }
}
const mapDispatchToProps = dispatch => {
    return {
        init: () => dispatch(actions.AuctionInit()),
        addItem:item=>dispatch(actions.AddItem(item)),
        deleteItem:id=>dispatch(actions.DeleteItem(id)),
        editItem:(id,item)=>dispatch(actions.EditItem(id,item))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Admin, axios));