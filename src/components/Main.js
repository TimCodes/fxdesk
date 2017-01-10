import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute, Link} from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'


import ChartSidebar  from './ChartSidebar';

import logo from '../logo.svg';
import '../App.css';



class Main extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      data:  [],
      visible: false
      
    };
  }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  dimVisibility = (e) => {
    console.log(e)
    //this.setState({ visible:false })
  }

  render() {
    const { visible } = this.state
    return (
        <div className =""  onClick={this.dimVisibility}>
          <ChartSidebar   visible={this.state.visible} />
          <div className = "ui container fluid " > 
            <div className="ui black small launch right attached fixed button" onClick={this.toggleVisibility}>
              <i className="content icon"></i>
            </div>
          </div>
          <div className = "ui container">
            {this.props.children}
          </div> 
        </div>    
    )
  }
}


// <CandleStickChart data={this.props.data} type={'hybrid'} />

function chartWrapper(data ){


}

export default Main;

