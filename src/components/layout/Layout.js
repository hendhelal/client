import React, { Component } from 'react';
import SideBar from '../UI/Navigation/SideBar/SideBar';
import ToolBar from '../UI/Navigation/ToolBar/ToolBar';
class Layout extends Component{

  state={sideBarShown:false}
  controlSideBar=()=>{
    this.setState(prevState=>{return{sideBarShown:!prevState.sideBarShown}})
  }
  render()
  {
    return (
      <div >
        <ToolBar click={this.controlSideBar}/>
        <SideBar click={this.controlSideBar} open={this.state.sideBarShown}/>
      <div>
          {this.props.children}
      </div>
      </div>
    );
  }


}

export default Layout;