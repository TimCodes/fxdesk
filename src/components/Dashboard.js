import React, { Component } from 'react';
import { Header, Grid, List, Segment, Divider } from 'semantic-ui-react';

import {getServiceContainer} from '../utils/ServicesContainer';
import ForexChartContainer from './Charts/ForexChartContainer';
import TradeEquityChart    from './TradePortfolio/TradeEquityChart';


class Dashboard extends Component {

 constructor(props) {
            super(props);

            this.state = {
                activeTrades         : [],
                openActiveTrades     : [],
                trackingActiveTrades : []
            };

            this.histroyService = getServiceContainer().history;
            this.trackerService = getServiceContainer().tracker;
    }

    componentWillMount(){
           this.setState({
             activeTrades     :  this.trackerService.getTrades(),
           }, this.setTrades)
    } 

    setTrades(){
        this.setState({
            openActiveTrades: this.state.activeTrades.filter(t => t.status === "OPEN"),
            trackingActiveTrades: this.state.activeTrades.filter(t => t.status === "TRACKING")
        })
    }    
    render(){ 
        return (
               <Grid doubling columns={2} padded className = "padded-grid">
                    <Grid.Column  computer = {10} >
                            <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                              Charts
                           </Header>
                            <ForexChartContainer  pair ="EURGBP" height =  {300} />
                            <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                             Equity
                           </Header>
                             <TradeEquityChart />
                     </Grid.Column>
                     <Grid.Column  computer = {6}>
                            <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                                Tracking
                            </Header>
                            <Segment.Group inverted size = 'large'>
                               {this.state.trackingActiveTrades.map(t  => {
                                   return <Segment inverted> {t.pair}</Segment>
                               })}
                            </Segment.Group>
                               <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                                Open
                            </Header>
                            <Segment.Group inverted size = 'large'>
                                {this.state.openActiveTrades.map(t  => {
                                   return <Segment inverted> {t.pair}</Segment>
                               })}
                            </Segment.Group>
                      </Grid.Column>
                </Grid>
            
         )    
    }
}

export default Dashboard;