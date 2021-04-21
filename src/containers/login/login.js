import { Component } from "react";
import Form from "../../components/UI/Form/form";
import { Input, inputChangeHandler } from './../../shared/formUtils/formUtils';
import { AuthContext } from './../../context/authContext';

class Login extends Component {

  state = {
    itemData: {
      name: new Input("", { placeholder: "", type: "text" }, "input", "Name", { required: true }),
      password: new Input("", { placeholder: "", type: "password" }, "input", "Password", { required: true }),
    },
    formValid: false,
  }

  render() {
    let itemData = {};
    let formData = [];
    for (let data in this.state.itemData) {
      itemData[data] = this.state.itemData[data].value;
      formData.push({ config: this.state.itemData[data], title: this.state.itemData[data].title, id: data })

    }

    this.inputChangeHandler = inputChangeHandler(this.setState.bind(this), this.state);

    return (
      <AuthContext.Consumer>
        {
          (props) => {
             return (
             <div>
              <Form click={(event) => { event.preventDefault(); props.login(this.state.itemData.name.value, this.state.itemData.password.value); }}
              formValid={this.state.formValid} inputChange={this.inputChangeHandler}
              btnText="LOGIN" fieldsData={formData}
              visible>
            </Form>
            {props.error!==''?<p style={{color:'red', fontSize:"20px"}}>{props.error}</p>:null}
            </div> )
          }

        }

      </AuthContext.Consumer>

    );
  }

}
export default Login;