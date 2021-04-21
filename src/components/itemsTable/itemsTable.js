import classes from "./itemsTable.module.css";
import ItemRow from "./itemRow/itemRow";
import { useSortableData } from './../../shared/hooks/useSortableData';

function ItemsTable(props) {
    let itemsFormatted = props.items.map(x => {
        x.noOfBids = x.bids.length;
            x.currentBid = x.bids.slice(-1);
            return x;
    })
    const { items, requestSort, sortConfig } = useSortableData(itemsFormatted);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    
    return (
        <div className={`table-responsive ${props.className}`}>
            <table className="table table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('name')}
                                className={getClassNamesFor('name')}
                            >
                                Name
                          </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('description')}
                                className={getClassNamesFor('description')}
                            >
                                Description
                          </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('endDate')}
                                className={getClassNamesFor('endDate')}
                            >
                                End Date
                          </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('price')}
                                className={getClassNamesFor('price')}
                            >
                                Starting Price
                          </button>
                        </th>
                        <th>
                        <button
                                type="button"
                                onClick={() => requestSort('currentBid')}
                                className={getClassNamesFor('currentBid')}
                            >
                               Current Bid
                          </button>
                        </th>
                        <th>
                        <button
                                type="button"
                                onClick={() => requestSort('noOfBids')}
                                className={getClassNamesFor('noOfBids')}
                            >
                              No Of Bids
                          </button>
                        </th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {props.items.length > 0 ? items.map((item, index) => <ItemRow item={item} key={index} deleteBtnClick={props.deleteClick} editBtnClick={props.editClick} />) :
                        <tr><td colSpan="9" className={`text-center ${classes.noItems}`}>No Items to display</td></tr>
                    }

                </tbody>
            </table>
        </div>
    )
}
export default ItemsTable;
