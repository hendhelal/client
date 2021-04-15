import { Component } from 'react';
import Form from '../../components/UI/Form/form';
 function Input(value,config,type,title,validRules,options=null,valid=false)
 {
     this.value=value;
     this.config={...config,value:this.value};
     this.valid=this.value.length>0 ?true:false;
     this.touched=false;
     this.type=type;
     this.title=title;
     this.validRules=validRules;
     this.options=options;
 }

class AddItem extends Component {
   
    state={
        itemData:{
            name:new Input(this.props.formData?this.props.formData.name :"",{placeholder:"",type:"text"},"input","Item Name",{length:6,required:true}),
            description:new Input(this.props.formData?this.props.formData.description :"",{placeholder:"",type:"text"},"input","Item Description",{length:10,required:true}),
            price:new Input(this.props.formData?this.props.formData.price :"",{placeholder:"",type:"number"},"input","Start Bid",{required:true}),
            endDate:new Input(this.props.formData?this.props.formData.endDate :"",{placeholder:"",type:"datetime-local"},"input","DeadLine",{required:true}),
            image:new Input(this.props.formData?this.props.formData.image :"",{placeholder:"",type:"file"},"input","Image",{required:true}),

        },
      formValid:false
    }
    checkValidity=(value,rules)=>{
        let isValid=true;
        for (const key in rules) {
            if (key==="length") {
                isValid=value.length>rules[key] &&isValid;
            }
            if (key==="required") {
                if(rules[key])
                {
                    isValid=rules[key] && isValid;
                }
               
            }
        }
        return isValid;
    }
    inputChangeHandler=(event,id,rules)=>{

         const value=event.target.value;
        
         let isValid=true;
          if(rules)
         {
           isValid=this.checkValidity(value,rules);
        }
        let itemData={...this.state.itemData};
        let elment={...itemData[id]} ;
        
        elment.value=value;
        elment.config.value=value;
        elment.valid=isValid;
        elment.touched=true;
        itemData[id]=elment;
        let formValid=true;
        for (const key in itemData) {
         formValid=itemData[key].valid && formValid;
        }
        this.setState({itemData,formValid});

    }
    componentDidUpdate(oldProps,oldState)
    {
if (this.props.formData)
{
    if(this.state.itemData.name.value==="")
    {
        let itemData={...this.state.itemData};
        console.log(itemData);
        itemData.name.value=this.props.formData.name;
       // itemData.name.config.value=this.props.formData.name;
        itemData.description.value=this.props.formData.description;
        //itemData.description.config.value=this.props.formData.description;
        itemData.price.value=this.props.formData.price;
        //itemData.price.config.value=this.props.formData.price;
        itemData.endDate.value=this.props.formData.endDate;
        //itemData.endDate.config.value=this.props.formData.endDate;
        itemData.image.value=this.props.formData.image;
        //itemData.image.config.value=this.props.formData.image;
console.log(itemData);
        this.setState({itemData:itemData});
    }
}
    }
  render() {
   
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
