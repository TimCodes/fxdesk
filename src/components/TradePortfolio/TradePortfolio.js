    import React, { Component } from 'react';
    import {Grid, Image, Table, Icon, Segment, Statistic, Header } from 'semantic-ui-react'

    import TradeEquityChart          from './TradeEquityChart';
    import TradePortfolioStats       from './TradePortfolioStats';
    import TradePortfolioTradesTable from './TradePortfolioTradesTable';
    
   import {getServiceContainer} from '../../utils/ServicesContainer';


    class TradePortfolio extends Component {

        constructor(props) {
            super(props);

            this.state = {
                
                trades     : [],
                lossCount  : null,
                winCount   : null,
                PnL        : null,
                maxDD      : null
            };

            this.dataService = getServiceContainer().history;
        }

        componentWillMount(){

         this.setState({
            trades     :  this.dataService.getTrades(),
            lossCount  :  this.dataService.getLossCount(),
            winCount   :  this.dataService.getWinCount(),
            PnL        :  this.dataService.getPNL(),
            maxDD      : this.dataService.getMaxDD()
         })


       
             
        }

        render(){ 
            return (
                <div className = "ui container" >   
                 <Grid>
                   <Grid.Column width =  {16}  >
                        <Header as='h1'  textAlign = 'center' attached = 'top' className = "section-header">
                            <span>History </span>
                        </Header>
                        <div className = "chartWrapper" >
                            <TradeEquityChart />
                        </div>
                        
                        <TradePortfolioStats 
                            winCount  = {this.state.winCount}
                            lossCount = {this.state.lossCount} 
                            PnL       = {this.state.PnL}
                            maxDD     = {this.state.maxDD}
                        />
                     
                       <TradePortfolioTradesTable  trades = {this.state.trades} />
                       </Grid.Column>
                     </Grid>  
                 </div> 
            )    
        }
    }

    export default TradePortfolio;