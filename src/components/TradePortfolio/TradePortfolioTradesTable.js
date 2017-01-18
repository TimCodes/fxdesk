import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'


class TradePortfolioTradesTable extends Component {

    render(){ 
        return (
   
                    <Table  inverted selectable unstackable size = "small">
                        <Table.Header>
                            <Table.Row>
                            <Table.HeaderCell>Pair</Table.HeaderCell>
                            <Table.HeaderCell>Result</Table.HeaderCell>
                            <Table.HeaderCell>PNL</Table.HeaderCell>
                            <Table.HeaderCell>Side</Table.HeaderCell>
                            <Table.HeaderCell>Open Date</Table.HeaderCell>
                            <Table.HeaderCell>Close Date</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {
                             this.props.trades.map(t => {
                                return <Table.Row>
                                            <Table.Cell>{t.pair}</Table.Cell>
                                            <Table.Cell>{t.result}</Table.Cell>
                                            <Table.Cell>{t.PNL}</Table.Cell>
                                            <Table.Cell>{t.side}</Table.Cell>
                                            <Table.Cell>{t.openDate}</Table.Cell>
                                            <Table.Cell>{t.closeDate}</Table.Cell>                                
                                       </Table.Row>
                             })
                           }
                        </Table.Body>
                    </Table>
         )    
    }
}

export default TradePortfolioTradesTable;