import classes from "./itemsTable.module.css";
import ItemRow from "./itemRow/itemRow";

function ItemsTable(props) {
    return (
        <div className="table-responsive">
        <table className="table table-striped table-hover">
            <thead  className="thead-dark">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>End Date</th>
                    <th>No Of Bids</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {props.items.map((item ,index)=> <ItemRow item={item} key={index} deleteBtnClick={props.deleteClick} editBtnClick={props.editClick} />)
                }
            </tbody>
        </table>
        </div>
    )
}
export default ItemsTable;
