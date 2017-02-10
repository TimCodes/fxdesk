import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute, Link} from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container, Grid } from 'semantic-ui-react'

import MainSidebar  from './MainSidebar';

import {init} from '../utils/ServicesContainer';
import TradeHistoryService from '../utils/TradeHistoryService';

import logo from '../logo.svg';
import '../App.css';


class Main extends Component {

  constructor(props) {
    super(props);
    init();
    this.state = {
      data:  [],
      visible: false
    };
  }

  toggleVisibility = () =>  {
    this.setState({ visible: !this.state.visible })
  }  

  dimVisibility = (e) => {
    if(this.state.visible){
      this.setState({ visible:false });
    }  
  }

  render() {
    const { visible } = this.state
    return (
        <div onClick={this.dimVisibility} >
          <MainSidebar   visible={this.state.visible} />
          <div className="ui black small launch right attached fixed button" onClick={this.toggleVisibility}>
              <i className="content icon"></i>
          </div>
          <div className="ui container fluid">
            {this.props.children}
          </div>
        </div>     
    )
  }
}

export default Main;

