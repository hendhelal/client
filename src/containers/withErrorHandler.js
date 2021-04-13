import React, { Component, Fragment } from "react";
import Modal from "../components/UI/Modal/Modal"

const withErrorHandler =(WrappedComponent,axios)=>{

  return class extends Component{
state={
  error:null
}

    componentWillMount(){
    this.requestInt=  axios.interceptors.request.use(req=>{
        this.setState({error:null})
        return req;
     
      })
      this.respInt=axios.interceptors.response.use(resp=>resp ,error=>{this.setState({error:error})})
    }
    controlModal=()=>{
      this.setState({error:null});
    }
    componentWillUnmount()
    {
       axios.interceptors.request.eject(this.requestInt);
       axios.interceptors.response.eject(this.respInt);
    }
     render()
     {
       return(
        <Fragment>
        <Modal click={this.controlModal}  show={this.state.error}>   {this.state.error ? this.state.error.message : null}</Modal>
        <WrappedComponent {...this.props}/>
      </Fragment>
       )
      
      
     }
  }
}
export default withErrorHandler;