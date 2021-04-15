import Button from './../../UI/Button/Button'
function ItemRow({item,editBtnClick,deleteBtnClick}) {
    return (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.endDate? item.endDate:'-'}</td>
            <td>{item.bids? item.bids.length:0}</td>
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