import React, { Component } from 'react';
import {Grid, Image, Table, Icon, Segment, Statistic } from 'semantic-ui-react'


class TradeHistory extends Component {

    render(){ return (
       <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Image   width = '1500' src='https://developer-custom.geckoboard.com/images/linechart-simple-9ebc1f09.png' />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Segment inverted textAlign = 'center' >
                         <Statistic inverted color='green'>
                            <Statistic.Value>$-1500</Statistic.Value>
                            <Statistic.Label>Max DD</Statistic.Label>
                        </Statistic>
                   </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment inverted textAlign = 'center' >
                         <Statistic inverted color='green'>
                            <Statistic.Value>5,550</Statistic.Value>
                            <Statistic.Label>Wins</Statistic.Label>
                        </Statistic>
                   </Segment>
                </Grid.Column>
                <Grid.Column width={4}> 
                     <Segment inverted textAlign = 'center' >
                         <Statistic inverted color='green'>
                            <Statistic.Value>550</Statistic.Value>
                            <Statistic.Label>Losses</Statistic.Label>
                        </Statistic>
                   </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                     <Segment inverted textAlign = 'center' >
                         <Statistic inverted color='green'>
                            <Statistic.Value>$20,000</Statistic.Value>
                            <Statistic.Label>PNL</Statistic.Label>
                        </Statistic>
                   </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={16} inverted>
                    <Table celled inverted selectable>
                        <Table.Header>
                            <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Notes</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                            <Table.Cell>John</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell textAlign='right'>None</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>Jamie</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell textAlign='right'>Requires call</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>Jill</Table.Cell>
                            <Table.Cell>Denied</Table.Cell>
                            <Table.Cell textAlign='right'>None</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )    
    }
}

export default TradeHistory;