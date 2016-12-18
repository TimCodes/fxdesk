import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'


import CandleStickChart from './candlestick'

import ChartSidebar from './components/ChartSidebar';


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
          <ChartSidebar   visible={this.state.visible} />
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


function chartWrapper(data ){


}

  // <Route path="/" component={Main}>
        //     <Route path="profile/:username" component={Profile} />
        //     <IndexRoute component={Home} />
        //   </Route>

export default App;

