import classes from "./auction.module.css";
import { Component } from "react";
import AuctionItems from "../../components/auctionItems/auctionItems";
const items = [
    { id: 111, name: "Satsuma Vase", description: "Important Japanese Meiji Satsuma Vase, Hand Painted, Gold", image: "111.jpg" },
    { id: 112, name: "Japanese Bowl", description: "Satsuma Japanese Bowl/signed/Character Mark/Meiji Period", image: "112.jpg" },
    { id: 113, name: "Brooch", description: "Gold Tone Owl Vintage Costume Jewelry Pin Brooch", image: "113.jpg" },
];
class Auction extends Component {
    constructor(props)
    {
        super(props);
       
    }
    state = {
        nameSearch: '',
        descSearch: '',
        items: items,
        orgItems: items
    }

    handleInputChange(event, type) {
        const value = event.target.value;
        let newItems = [];
        if (type === "name") {
            newItems = this.state.items.filter(item => item.name.toLocaleLowerCase().includes(value));
            this.setState({ nameSearch: value });
        }
        else {
            newItems = this.state.items.filter(item => item.description.toLocaleLowerCase().includes(value));
            this.setState({ descSearch: value });
        }
        if (value === '') {
            newItems = this.state.orgItems;
        }

        this.setState({ items: newItems });

    }
    render() {
        return (
            <div className={classes.Auction}>
                <div className={classes.searchContainer}>
                    <input placeholder="Filter By Name" value={this.state.nameSearch} onChange={(e)=> this.handleInputChange(e, "name")} />
                    <input placeholder="Filter By Description" value={this.state.descSearch} onChange={(e)=> this.handleInputChange(e, "desc")} />
                </div>
                <AuctionItems items={this.state.items} />
            </div>
        )

    }
}
export default Auction;