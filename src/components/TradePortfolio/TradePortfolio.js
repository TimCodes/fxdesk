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
                   <Grid>
                        <TradeEquityChart />
                        <TradePortfolioStats 
                            winCount  = {this.state.winCount}
                            lossCount = {this.state.lossCount} 
                            PnL       = {this.state.PnL}
                            maxDD     = {this.state.maxDD}
                        />
                        <Grid.Row>
                            <Grid.Column width={16} inverted>
                                <TradePortfolioTradesTable  trades = {this.state.trades} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            )    
        }
    }

    export default TradePortfolio;