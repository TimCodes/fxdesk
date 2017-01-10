import React, { Component } from 'react';
import {Grid, Segment, Statistic } from 'semantic-ui-react'


class TradePortfolioStats extends Component {

    render(){ return (

            <Grid.Row>
                <Grid.Column width={4}>
                    <Segment inverted textAlign = 'center' >
                         <Statistic inverted color='green'>
                            <Statistic.Value>{this.props.maxDD}</Statistic.Value>
                            <Statistic.Label>Max DD</Statistic.Label>
                        </Statistic>
                   </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment inverted textAlign = 'center' >
                         <Statistic inverted color='green'>
                            <Statistic.Value>{this.props.winCount}</Statistic.Value>
                            <Statistic.Label>Wins</Statistic.Label>
                        </Statistic>
                   </Segment>
                </Grid.Column>
                <Grid.Column width={4}> 
                     <Segment inverted textAlign = 'center' >
                         <Statistic inverted color='green'>
                            <Statistic.Value>{this.props.lossCount}</Statistic.Value>
                            <Statistic.Label>Losses</Statistic.Label>
                        </Statistic>
                   </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                     <Segment inverted textAlign = 'center' >
                         <Statistic inverted color='green'>
                            <Statistic.Value>{this.props.PnL}</Statistic.Value>
                            <Statistic.Label>PNL</Statistic.Label>
                        </Statistic>
                   </Segment>
                </Grid.Column>
            </Grid.Row>
           
      )    
    }
}

export default TradePortfolioStats;