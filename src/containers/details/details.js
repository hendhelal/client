import { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "../../auction-axios";
import withErrorHandler from "../withErrorHandler";
import * as actions from './../../store/actions/index';
import Spinner from "./../../components/UI/Spinner/Spinner";
import classes from './details.module.css';
import CountDown from "../../components/UI/Countdown/countDown";
class Details extends Component {

    state = {
        startBid: 0
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        if (typeof (+this.state.startBid) === "number") {
            if (this.props.item.bids.slice(-1) < this.state.startBid) {
                const newItem = { ...this.props.item };
                let bids;
                if (!newItem.bids) {
                    bids = []
                }
                else {
                    bids = [...newItem.bids];
                }

                bids.push(this.state.startBid);
                newItem.bids = bids;
                this.props.addBid(newItem, this.props.match.params.id);
            }

        }

    }
    componentDidMount() {
        this.props.getItem(this.props.match.params.id);

    }

    render() {
        if (!this.props.item) {
            return <Spinner />
        }
        else {
            let spans;
            let item = this.props.item;
            if (item.bids) {
                spans = (<div className={classes.bidsStats}>
                    <span>Current Bid: </span><span className="font-weight-bold">{item.bids.slice(-1)}$</span>
                    <span className="font-weight-bold">[{item.bids.length} bids]</span>
                </div>)

            }
            else {
                spans = (<div className={classes.bidsStats}>
                    <span>Starting Bid: </span><span className="font-weight-bold">{item.price}$</span>
                    <span className="font-weight-bold">[0 bids]</span>
                </div>)
            }
            return (
                <div className={classes.details}>
                    <div className={classes.left}>
                        <img src={`/imgs/${item.image}`} />
                    </div>
                    <div className={classes.right}>
                        <h1>{item.name}</h1>
                        <div>
                            <span>Item Description:</span>
                            <h4>
                                {item.description}
                            </h4>
                        </div>
                        <span>Time Left:</span>
                        <CountDown endDate={item.endDate} />
                        <form onSubmit={this.handleFormSubmit}>
                            {spans}
                            <input className="form-control" type="number" placeholder={item.bids ? +item.bids.slice(-1) + 1 : item.price} min={item.bids ? +item.bids.slice(-1) + 1 : item.price} value={this.state.startBid} onChange={(e) => this.setState({ startBid: e.target.value })} />
                            <button className="btn" >Submit Bid</button>
                            <p> Enter bid of {item.bids ? +item.bids.slice(-1) + 1 : item.price + 1} $ or highter</p>
                        </form>
                    </div>
                </div>
            )
        }

    }
    componentWillUnmount() {
        this.props.clearItem();
    }
}
const mapStateToProps = state => {

    return {
        item: state.items.item,
        error: state.items.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getItem: (id) => dispatch(actions.GetItem(id)),
        clearItem: () => dispatch(actions.clearItemFromState()),
        addBid: (item, id) => dispatch(actions.AddBid(item, id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Details, axios));