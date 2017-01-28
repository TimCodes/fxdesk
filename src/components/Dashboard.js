import React, { Component } from 'react';
import { Header, Grid, List, Segment, Divider } from 'semantic-ui-react';

import {getServiceContainer} from '../utils/ServicesContainer';
import ForexChartContainer from './Charts/ForexChartContainer';
import TradeEquityChart    from './TradePortfolio/TradeEquityChart';


class Dashboard extends Component {

 constructor(props) {
            super(props);

            this.state = {
                
                trades     : []
                
            };

            this.dataService = getServiceContainer().history;
    }

    componentWillMount(){

         this.setState({
            trades     :  this.dataService.getTrades(),
           
         })
    }     
    render(){ 
        return (
            
                <Grid doubling columns={2} padded className = "padded-grid">
                     <Grid.Column  computer = {10} >
                       
                            <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                              Charts
                           </Header>
                            <ForexChartContainer  pair ="EUR_GBP" height =  {300} />
                      
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
                                <Segment inverted>EURUSD   <Divider  vertical/>  Buy</Segment>
                                <Segment inverted>GBPUSD</Segment>
                                <Segment inverted>EURJPY</Segment>
                                <Segment inverted>JPYUSD</Segment>
                                <Segment inverted>Bilkl</Segment>
                            </Segment.Group>
                               <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                                Open
                            </Header>
                            <Segment.Group inverted size = 'large'>
                                <Segment inverted>EURUSD   <Divider  vertical/>  Buy</Segment>
                                <Segment inverted>GBPUSD</Segment>
                                <Segment inverted>EURJPY</Segment>
                                <Segment inverted>JPYUSD</Segment>
                                <Segment inverted>Bilkl</Segment>
                            </Segment.Group>
                       
                     </Grid.Column>
                </Grid>
            
         )    
    }
}

export default Dashboard;