import classes from "./auction.module.css";
import { Component } from "react";
import AuctionItems from "../../components/auctionItems/auctionItems";
import Pagination from "../../components/UI/Pagination/pagination";
import withErrorHandler from './../withErrorHandler';
import * as actions from './../../store/actions/index';
import { connect } from "react-redux";
import axios from './../../auction-axios';


class Auction extends Component {

    state = {
        nameSearch: '',
        descSearch: '',
        priceSearch:'Filter By Price',
        pageItems:[],

    }
    componentDidMount(){
        this.setState({loading:false});
        this.props.auctionInit();


    }
    handleInputChange(event, type) {
        const value = event.target.value;
        let oldItems=this.state.items?this.state.items:this.props.items;
        let newItems = [];
        if (type === "name") {
            newItems = oldItems.filter(item => item.name.toLocaleLowerCase().includes(value));
            this.setState({ nameSearch: value });
        }
        else  if (type === "desc") {
            newItems = oldItems.filter(item => item.description.toLocaleLowerCase().includes(value));
            this.setState({ descSearch: value });
        }
        else{
            if(value==="high")
            {
                newItems = oldItems.sort((a, b) => b.price - a.price);
            }
            else{
                newItems = oldItems.sort((a, b) => a.price - b.price);
            }
           
            this.setState({ priceSerach: value });
            this.setState({ pageItems: newItems.slice(0,10) });
        }
        if (value === '') {
            newItems = this.props.orgItems;
        }

        this.setState({ items: newItems });

    }
    onChangePage=(pageItems)=> {
        // update state with new page of items
        this.setState({ pageItems: pageItems });
    }
    render() {
        return (
            <div className={classes.Auction}>
                <div className={classes.searchContainer}>
                    <input placeholder="Filter By Name" className="form-control" value={this.state.nameSearch} onChange={(e)=> this.handleInputChange(e, "name")} />
                    <input placeholder="Filter By Description" value={this.state.descSearch} className="form-control" onChange={(e)=> this.handleInputChange(e, "desc")} />
                    <select onChange={(e)=> this.handleInputChange(e, "price")}  className="form-control"  defaultValue={this.state.priceSearch} >
                        <option value="Filter By Price"  disabled hidden>Filter By Price</option>
                        <option value="high">High to Low</option>
                        <option value="low">Low to High</option>

                    </select>
                </div>
               {this.state.pageItems.length>0 ?<AuctionItems items={this.state.pageItems} />: <h1>NO ITEMS AVAILABLE.</h1>} 
                <Pagination items={this.state.items?this.state.items:this.props.items} onChangePage={this.onChangePage} />
            </div>
        )

    }
}
const mapStateToProps=state=>{
    
    return{
        items:state.items.items,
        error:state.items.error,
        orgItems:state.items.items
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        auctionInit:()=>dispatch(actions.AuctionInit()),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Auction,axios)) ;
