import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'


import CandleStickChart from './candlestick'
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = { visible: false }
  constructor(props) {
    super(props);

    this.state = {
      data:  []
      
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
        <div className ="basic minimal pushable">
          <Sidebar as={Menu} animation='overlay' width='very thin' visible={visible} icon='labeled' vertical inverted>
           <Menu fluid vertical inverted size='mini' className= "main"  color="blue" >
            <Menu.Item name='home' data-content="Play Music" fitted>
              <Icon name='home' className = "whiteIcon" />
            </Menu.Item>
            <Menu.Item name='calculator' fitted>
              <Icon name='line chart' className = "whiteIcon" />
            </Menu.Item>
             <Menu.Item name='gamepad' fitted>
              <Icon name='file text' className = "whiteIcon" />
            </Menu.Item>
            <Menu.Item name='gamepad' fitted>
              <Icon name='folder' className = "whiteIcon" />
            </Menu.Item>
            <Menu.Item name='gamepad' fitted>
              <Icon name='calendar' className = "whiteIcon" />
            </Menu.Item>
            <Menu.Item name='calculator' fitted>
              <Icon name='newspaper' className = "whiteIcon" />
            </Menu.Item>
            <Menu.Item name='calculator' fitted>
              <Icon name='calculator' className = "whiteIcon" />
            </Menu.Item>
          
           </Menu> 
          </Sidebar>
         
         <div className = "ui container fluid "  onClick={this.dimVisibility}> 
          <div className="ui black small launch right attached fixed button" onClick={this.toggleVisibility}>
          <i className="content icon"></i>
          
        </div>
         <CandleStickChart data={this.props.data} type={'hybrid'} />
         </div>
       </div>
    )
  }
}

export default App;

