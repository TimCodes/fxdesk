import React, { Component } from 'react';
import { Dropdown, Grid, Card, Segment } from 'semantic-ui-react'


const trigger = (
    <i className="ellipsis vertical icon right floated"></i>
)


class TradeTrackerList extends Component {
        render(){ return (
            <Grid.Row>
            {this.props.trades.map( (t, idx) => {
                let editClick   = this.props.editTrade.bind(this, t, idx);
                let viewClick   = this.props.viewTrade.bind(this, t, idx);
                let deleteClick = this.props.deleteTrade.bind(this, t, idx);
                let closeClick  = this.props.closeTrade.bind(this, t, idx);
                return (   
                <Grid.Column  computer={8} mobile = {16}>      
                <Card color='black' key = {idx}  fluid className = "section-background"> 
                    <Card.Content >
                        <Dropdown  inline trigger={trigger} icon  className ='right floated section-background' pointing = 'left top'>
                            <Dropdown.Menu className = "section-background">
                                <Dropdown.Item text='View' description = 'view details' onClick = {viewClick} />
                                <Dropdown.Item text='Edit' description='edit details' onClick = {editClick} />
                                <Dropdown.Item text='Close' description='close to history'onClick = {closeClick} />
                                <Dropdown.Item text='Delete' description='delete for good' onClick = {deleteClick} />
                            </Dropdown.Menu>
                        </Dropdown>
                        <Card.Header className = "section-background">
                        {t.pair}
                        </Card.Header>
                        <Card.Meta className = "section-background">
                        {t.side}
                        </Card.Meta>
                    </Card.Content>
                    </Card> 
                    </Grid.Column>      
                    )
                })}
            </Grid.Row>
            
          
      
        )    
        }
    }

export default TradeTrackerList;
