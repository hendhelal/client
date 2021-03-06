import { Link } from 'react-router-dom';
import classes from './auctionItem.module.css';
function AuctionItem(props) {
    const item = props.item;
    return (<li className={classes.Item}>
        <img src={`http://localhost:5000/${item.image}`} alt={item.name} />
        <span>{item.name}</span>
        <span>{item.description}</span>
        <span>{item.bids.length>0 ?item.bids.slice(-1):item.price} $</span>
        <Link to={`items/${item.id}`}>Bid Now</Link>
    </li>)
}
export default AuctionItem;