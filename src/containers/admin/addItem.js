import { Component } from 'react';
import Form from '../../components/UI/Form/form';
 import {inputChangeHandler,Input} from'./../../shared/formUtils/formUtils';
class AddItem extends Component {
   
    state={
        itemData:{
            name:new Input(this.props.formData?this.props.formData.name :"",{placeholder:"",type:"text"},"input","Item Name",{length:6,required:true}),
            description:new Input(this.props.formData?this.props.formData.description :"",{placeholder:"",type:"text"},"input","Item Description",{length:10,required:true}),
            price:new Input(this.props.formData?this.props.formData.price :"",{placeholder:"",type:"number"},"input","Start Bid",{required:true}),
            endDate:new Input(this.props.formData?this.props.formData.endDate :"",{placeholder:"",type:"datetime-local"},"input","DeadLine",{required:true}),
            image:new Input(this.props.formData?this.props.formData.image :"",{placeholder:"",type:"file"},"image","Image",{required:true}),

        },
      formValid:false
    }
  
  render() {
this.inputChangeHandler=inputChangeHandler(this.setState.bind(this),this.state);
   
      let itemData={};
      let formData=[];
      for(let data in this.state.itemData)
      {
        itemData [data]=this.state.itemData[data].value;
          formData.push({config:this.state.itemData[data],title:this.state.itemData[data].title,id:data})

      }
      
    return (
        <Form click={(event)=>{event.preventDefault(); this.props.click({...itemData})}} cancelBtn={this.props.cancelBtn} cancelHandler={this.props.cancelHandler} formValid={this.state.formValid} inputChange={this.inputChangeHandler} btnText={this.props.btnText} fieldsData={formData}/>
    );
  }
}

export default AddItem;
