import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute, Link} from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'

import CandleStickChart   from './components/candlestick';
import CandleStickWrapper from './components/CandleStickWrapper';
import ChartSidebar       from './components/ChartSidebar';
import TradeTracker       from './components/TradeTacker/TradeTracker';
import TradePortfolio     from './components/TradePortfolio/TradePortfolio';
import TradeTool          from './components/TradeTool';
import News               from './components/News';
import Dashboard          from './components/Dashboard';
import Portfolio          from './components/Portfolio';
import EconomicCalender   from './components/EconomicCalender';
import Main               from './components/Main';



import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){ 
    return (
     <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="charts" component={CandleStickWrapper} />
        <Route path="tools" component={TradeTool} />
        <Route path="trades" component={TradeTracker} />
        <Route path="history" component={TradePortfolio} />        
        <Route path="news" component={News} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="calender" component={EconomicCalender} />
        <IndexRoute component={Dashboard} />
       </Route>
     </Router>
    ) 
  }
}

// <CandleStickChart data={this.props.data} type={'hybrid'} />

function chartWrapper(data ){


}

export default App;

