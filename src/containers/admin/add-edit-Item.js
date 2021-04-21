import { Component } from 'react';
import Form from '../../components/UI/Form/form';
import { inputChangeHandler, Input } from '../../shared/formUtils/formUtils';
class AddItem extends Component {
  constructor(props) {
    super(props);
    let today = new Date();

    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hr = today.getHours();
    var mins = today.getMinutes();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    let now = yyyy + '-' + mm + '-' + dd + "T" + hr + ":" + mins;
    this.state = {
      itemData: {
        name: new Input(this.props.formData.name, { placeholder: "", type: "text", value: this.props.formData.name }, "input", "Item Name", { length: 6, required: true }),
        description: new Input(this.props.formData.description, { placeholder: "", type: "text", value: this.props.formData.description }, "input", "Item Description", { length: 10, required: true }),
        price: new Input(this.props.formData.price, { placeholder: "", type: "number", value: this.props.formData.price }, "input", "Start Bid", { required: true }),
        endDate: new Input(this.props.formData.endDate, { placeholder: "", type: "datetime-local", min: now, value: this.props.formData.endDate }, "input", "DeadLine", { required: true }),
        image: new Input(this.props.formData.image, { placeholder: "", type: "file" }, "image", "Image", { required: true }),

      },
      propsFieldsData: this.props.formData,
      formValid: false
    }
  }

  clearFields( dataSource)
  {
    let newFields = {
      name: { ...dataSource.name },
      description: { ...dataSource.description },
      endDate: { ...dataSource.endDate },
      price: { ...dataSource.price },
      image:{...dataSource.image}
    };
    for (let key in newFields) {
    
      newFields[key].valid = false;
      newFields[key].value = "";
      newFields[key].config = { ...dataSource[key].config }
      newFields[key].config.value = "";

    }
    return newFields;
  }
  componentDidMount() {
    if (!this.state.orgFields) {
      let emptyFields =this.clearFields({...this.state.itemData});
      this.setState({
        orgFields:emptyFields
      })
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.formData !== state.propsFieldsData) {
     
      if (props.formData.name.length > 0) {

        let oldFields = { ...state.itemData }
        let newFields;
         //alow price edit only of no bids made yet
        if (props.formData.bids.length === 0) {
          newFields = {
            name: { ...oldFields.name },
            description: { ...oldFields.description },
            endDate: { ...oldFields.endDate },
            price: { ...oldFields.price }
          };

          for (let key in newFields) {
            if(!newFields[key].config)
            {
              newFields[key]={...state.orgFields[key]};
              newFields[key].config={...state.orgFields[key].config}
              
            }
            else{
              newFields[key].valid = true;
              newFields[key].value = props.formData[key];
              newFields[key].config = { ...oldFields[key].config }
             
            }
            newFields[key].config.value = props.formData[key];
            newFields[key].value = props.formData[key];

          }

        }
        else {
          newFields = {
            name: { ...oldFields.name },
            description: { ...oldFields.description },
            endDate: { ...oldFields.endDate },
          };

          for (let key in newFields) {
            newFields[key].valid = true;
            newFields[key].value = props.formData[key];
            newFields[key].config = { ...oldFields[key].config }
            newFields[key].config.value = props.formData[key];

          }
        }
        let newstate = { ...state, itemData: newFields, propsFieldsData: props.formData };
        return newstate;

      }
    }
    return state;
  }

  render() {
    this.inputChangeHandler = inputChangeHandler(this.setState.bind(this), this.state);

    let itemData = {};// for values
    let formData = [];// for rendering
    for (let data in this.state.itemData) {
      itemData[data] = this.state.itemData[data].value;
      formData.push({ config: this.state.itemData[data], title: this.state.itemData[data].title, id: data })

    }

    return (
      <Form click={(event) => {
        event.preventDefault();
        this.props.click({ ...itemData });
        this.setState({formValid:false});
        if(this.props.btnText.includes("Add"))
        {
          var emptyFields=this.clearFields(this.state.orgFields);
          this.setState({itemData:emptyFields})
         document.getElementById("image").value="";
        }
      }} cancelBtn={true}
        cancelHandler={(event)=>{this.props.cancelHandler(event); this.setState({itemData:this.state.orgFields,formValid:false});}}
        formValid={this.state.formValid}
        inputChange={this.inputChangeHandler}
        btnText={this.props.btnText}
        fieldsData={formData}
        visible={this.props.visible} />
    );
  }
}

export default AddItem;
