import { Component } from "react";
import withErrorHandler from './../withErrorHandler';
import * as actions from './../../store/actions/index';
import { connect } from "react-redux";
import axios from './../../auction-axios';
import Spinner from './../../components/UI/Spinner/Spinner'
import classes from "./admin.module.css";
import ItemsTable from "../../components/itemsTable/itemsTable";
import AddEditItem from "./add-edit-Item";
import Pagination from "../../components/UI/Pagination/pagination";

class Admin extends Component {

    state={
        formVisible:false,
        btnText:"Add Item",
        selectedItem:{name:"",description:"",price:"",endDate:"",image:"",bids:[]}
        ,formValid:false,
        items:null,
        pageItems:[]
    }
    onChangePage=(pageItems)=> {
        // update state with new page of items
        this.setState({ pageItems: pageItems });
    }
    componentDidMount() {
        this.props.init();
       
    }
    editBtnHandler=(item)=>{
        
        var date = new Date(item.endDate).toISOString().substr(0, 16)
        let selectedItem={...item,image:"",endDate:date};
        this.setState({btnText:"Update Item", selectedItem:selectedItem});
        this.setState({formVisible:true,formValid:false});
    }
    cancelBtnHandler=(event)=>{
        event.preventDefault();
        this.setState({ btnText:"Add Item",formVisible:false,selectedItem:{name:"",description:"",price:"",endDate:"",image:"",bids:[]}});
    }
    clickBtnHandler=(item)=>{
        if(this.state.btnText.includes("Add"))
        {
            const formData = new FormData();
            formData.append('name', item.name);
            formData.append('description', item.description);
            formData.append('price', item.price);
            formData.append('endDate', item.endDate);
            formData.append('image', item.image);
         
            this.props.addItem(formData);
        }
        else{
            const formData ={name:item.name, description:item.description,endDate:item.endDate,price:item.price?+item.price:+this.state.selectedItem.price}
               let id=this.state.selectedItem.id;

            this.props.editItem(id,formData);
        }
    }

    render() {
        if (this.props.items) {
            return (
                <div className={classes.adminPage}>
                   <h1>Auction Items</h1>
                     <AddEditItem visible={this.state.formVisible} formData={this.state.selectedItem? this.state.selectedItem:null} 
                     click={this.clickBtnHandler} cancelHandler={this.cancelBtnHandler} cancelBtn={true} btnText={this.state.btnText} formValid={this.state.formValid}/>
                   {!this.state.formVisible? <button className={`${classes.AddItem} btn`} onClick={()=>this.setState({formVisible:true})}>Add Item</button>:null} 
                  <ItemsTable items={this.state.pageItems} deleteClick={this.props.deleteItem} editClick={this.editBtnHandler} className={classes.tableList}/>
                {this.props.items.length>0  ?<Pagination items={this.props.items} onChangePage={this.onChangePage} />:null} 
                </div>
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