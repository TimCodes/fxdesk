    import React, { Component } from 'react';
    import {Grid, Image, Table, Icon, Segment, Statistic } from 'semantic-ui-react'

    import TradeEquityChart          from './TradeEquityChart';
    import TradePortfolioStats       from './TradePortfolioStats';
    import TradePortfolioTradesTable from './TradePortfolioTradesTable';
    
    import TradeHistoryService from '../../utils/TradeHistoryService';


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

            this.dataService = new TradeHistoryService();
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
                   <div className = "ui container">
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
                 </div> 
            )    
        }
    }

    export default TradePortfolio;