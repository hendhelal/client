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
        btnText:"Add Item",
        cancelBtn:false,
        selectedItem:null
    }
    componentDidMount() {
        this.props.init();
    }
    editBtnHandler=(item)=>{
        this.setState({btnText:"Update Item",cancelBtn:true, selectedItem:item});
        
    }
    cancelBtnHandler=()=>{
        this.setState({ btnText:"Add Item",cancelBtn:false});
    }
    clickBtnHandler=(item,id)=>{
        if(this.state.btnText.includes("Add"))
        {
            this.props.addItem(item);
        }
        else{
            this.props.editItem(id,item);
        }
    }

    render() {
        if (this.props.items) {
            return (
                <Fragment>
                    <AddItem formData={this.state.selectedItem? this.state.selectedItem:null} click={this.clickBtnHandler} cancelHandler={this.cancelBtnHandler} cancelBtn={this.state.cancelBtn} btnText={this.state.btnText}/>
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