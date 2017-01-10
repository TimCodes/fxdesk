import React, { Component } from 'react';
import { Dropdown, Grid, Card, Segment } from 'semantic-ui-react'


const trigger = (
    <i className="ellipsis vertical icon right floated"></i>
)


class TradeTrackerList extends Component {
        render(){ return (
            <Grid>
            {this.props.trades.map( (t, idx) => {
                let editClick   = this.props.editTrade.bind(this, t, idx);
                let viewClick   = this.props.viewTrade.bind(this, t, idx);
                let deleteClick = this.props.deleteTrade.bind(this, t, idx);
                let closeClick  = this.props.closeTrade.bind(this, t, idx);
                return (   
                <Grid.Column  computer={8} mobile = {16}>      
                <Card color='green' key = {idx}  fluid className = "blue-bg"> 
                    <Card.Content >
                        <Dropdown  inline trigger={trigger} icon  className ='right floated' pointing = 'left top'>
                            <Dropdown.Menu>
                                <Dropdown.Item text='View' description = 'view details' onClick = {viewClick} />
                                <Dropdown.Item text='Edit' description='edit details' onClick = {editClick} />
                                <Dropdown.Item text='Close' description='close to history'onClick = {closeClick} />
                                <Dropdown.Item text='Delete' description='delete for good' onClick = {deleteClick} />
                            </Dropdown.Menu>
                        </Dropdown>
                        <Card.Header>
                        {t.pair}
                        </Card.Header>
                        <Card.Meta>
                        {t.side}
                        </Card.Meta>
                        <Card.Description>
                        <Segment color = 'blue' inverted textAlign= 'center' 	>
                           {t.status}
                        </Segment>
                        </Card.Description>
                    </Card.Content>
                    </Card> 
                    </Grid.Column>      
                    )
                })}
            </Grid>
            
          
      
        )    
        }
    }

    export default TradeTrackerList;


