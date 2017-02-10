import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import ForexChartContainer from './components/Charts/ForexChartContainer';

import TradeTracker        from './components/TradeTacker/TradeTracker';
import TradePortfolio      from './components/TradePortfolio/TradePortfolio';
import TradeTool           from './components/TradeTool';
import News                from './components/News';
import Dashboard           from './components/Dashboard';
import EconomicCalender    from './components/EconomicCalender';
import Main                from './components/Main';

import './App.css';

class App extends Component{
  render(){ 
    return (
     <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="charts" component={ForexChartContainer} />
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


export default App;

