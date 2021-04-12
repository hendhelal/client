import { Link } from 'react-router-dom';
import classes from './auctionItem.module.css';
function AuctionItem(props) {
    const item = props.item;
    return (<li className={classes.Item}>
        <img src={`/imgs/${item.image}`} />
        <span>{item.name}</span>
        <span>{item.description}</span>
        <Link to={`details/${item.id}`}>Bid Now</Link>
    </li>)
}
export default AuctionItem;