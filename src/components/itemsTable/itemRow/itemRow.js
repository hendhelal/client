import { useHistory } from 'react-router';
import Button from './../../UI/Button/Button'
function ItemRow({item,editBtnClick,deleteBtnClick}) {
     const history = useHistory();
    return (
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.endDate?  new Date(item.endDate).toLocaleString():'-'}</td>
            <td>{item.price}</td>
            <td>{item.bids.length>0?item.bids.slice(-1):0}</td>
            <td>{item.bids.length>0? item.bids.length:0}</td>
            <td>
                <Button type="Primary" click={()=>history.push(`/items/${item.id}`)}>View</Button>
                </td>
            <td>
            <Button type="Success" click={()=>editBtnClick(item)}>Edit</Button>
            </td>
            <td>
               <Button type="Danger" click={()=>deleteBtnClick(item.id)}>Delete</Button>
            </td>
        </tr>
    )
}
export default ItemRow