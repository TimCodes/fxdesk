import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'

import CandleStickChart from './candlestick'
import ChartSidebar from './components/ChartSidebar';
import TradeTracker from './components/TradeTracker';

import logo from './logo.svg';
import './App.css';



class App extends Component {
 
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
        <div className ="ui basic minimal pushable"  onClick={this.dimVisibility}>
          <ChartSidebar   visible={this.state.visible} />
          <div className = "ui container fluid " > 
            <div className="ui black small launch right attached fixed button" onClick={this.toggleVisibility}>
              <i className="content icon"></i>
            </div>
          </div>
          <div className = "ui container">
           <TradeTracker />
          </div> 
        </div>    
    )
  }
}

// <Route path="/" component={Main}>
//             <Route path="profile/:username" component={Profile} />
//             <IndexRoute component={Home} />
//           </Route>
//           <CandleStickChart data={this.props.data} type={'hybrid'} />

function chartWrapper(data ){


}

export default App;

