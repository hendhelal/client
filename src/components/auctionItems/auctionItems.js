import AuctionItem from "./auctionItem/auctionItem";
import classes from './auctionItems.module.css';
function AuctionItems(props){
    return (
        
        <ul className={classes.Items}>
  {props.items.map((item,i)=><AuctionItem  key={i} item={item}/>)}
        </ul>
      
        );
}
export default AuctionItems;