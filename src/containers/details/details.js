import { Component } from "react";
import { connect } from "react-redux";
import axios from "../../auction-axios";
import withErrorHandler from "../withErrorHandler";
import * as actions from './../../store/actions/index';
import Spinner from "./../../components/UI/Spinner/Spinner";
import classes from './details.module.css';
import CountDown from "../../components/UI/Countdown/countDown";
class Details extends Component {

    componentDidMount() {
        this.props.getItem(this.props.match.params.id);
    }

    render() {
        if (!this.props.item) {
            return <Spinner />
        }
        else {
            return (
                <div className={classes.details}>
                    <div className={classes.left}>
                        <img src={`/imgs/${this.props.item.image}`} />
                    </div>
                    <div className={classes.right}>
                        <h1>{this.props.item.name}</h1>
                        <div>
                            <h3>Item Description:</h3>
                            <h4>
                                {this.props.item.description}
                            </h4>
                            </div>
                        <h3>Price:{this.props.item.price}$</h3>
                        <span>{this.props.item.endDate}</span>
                        <h3>Time Left:</h3>
                        <CountDown endDate={this.props.item.endDate}/>
                    </div>
                </div>
            )
        }

    }
    componentWillUnmount(){
        this.props.clearItem();
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        item: state.items.item,
        error: state.items.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getItem: (id) => dispatch(actions.GetItem(id)),
        clearItem:()=>dispatch(actions.clearItemFromState())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Details, axios));