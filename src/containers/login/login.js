import { Component } from "react";
import Form from "../../components/UI/Form/form";
import {Input,inputChangeHandler} from './../../shared/formUtils/formUtils';
import {AuthContext} from './../../context/authContext';
import { Redirect } from "react-router";
class Login extends Component{
  
    state={
        itemData:{
            name:new Input("",{placeholder:"",type:"text"},"input","Name",{length:6,required:true}),
            email:new Input("",{placeholder:"",type:"email"},"input","E-mail",{length:10,required:true}),
            password:new Input("",{placeholder:"",type:"password"},"input","Password",{required:true,length:6}),

        },
      formValid:false,
      loginMode:true
    }
  
  render() {
      let itemData={};
      let formData=[];
      for(let data in this.state.itemData)
      {
          if(this.state.loginMode && data==="name")
          {
              continue;
          }
        itemData [data]=this.state.itemData[data].value;
          formData.push({config:this.state.itemData[data],title:this.state.itemData[data].title,id:data})

      }
      const withoutName={
          ...this.state,
          itemData:{
              email:this.state.itemData.email,
              password:this.state.itemData.password
          }
      };
      const formFields=this.state.loginMode? withoutName:this.state
    this.inputChangeHandler=inputChangeHandler(this.setState.bind(this),formFields);
      
    return (
        <AuthContext.Consumer>
            {
                (props) =>{
                    console.log(props);
                  return  <Form click={(event)=>{event.preventDefault(); props.login() }}  formValid={this.state.formValid} inputChange={this.inputChangeHandler} btnText={this.state.loginMode?"LOGIN":"SIGNUP"} fieldsData={formData}>
                    <button onClick={(e)=>{e.preventDefault(); this.setState({loginMode:!this.state.loginMode}); }}>
                        Switch to {this.state.loginMode?"SIGNUP":"LOGIN"}
                         </button>
                </Form>
                }

            }

        </AuthContext.Consumer>
       
    );
  }

}
export default Login;