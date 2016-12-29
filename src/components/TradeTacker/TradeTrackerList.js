import React, { Component } from 'react';
import { Dropdown, Grid, Card, Segment } from 'semantic-ui-react'


const trigger = (
    <i className="ellipsis vertical icon right floated"></i>
)


class TradeTrackerList extends Component {
        render(){ return (
            <Grid>
            {this.props.trades.map( (e, idx) => {
                return (   
                <Grid.Column  computer={8} mobile = {16}>      
                <Card color='green' key = {idx}  fluid className = "blue-bg"> 
                    <Card.Content >
                        <Dropdown  inline trigger={trigger} icon  className ='right floated' pointing = 'left top'>
                            <Dropdown.Menu>
                            <Dropdown.Item text='View' description = 'view details' />
                            <Dropdown.Item text='Edit' description='edit details' />
                            <Dropdown.Item text='Close' description='close to history' />
                            <Dropdown.Item text='Delete' description='delete for good' />
                            </Dropdown.Menu>
                        </Dropdown>
                        <Card.Header>
                        EURUSD
                        </Card.Header>
                        <Card.Meta>
                        BUY
                        </Card.Meta>
                        <Card.Description>
                        <Segment color = 'blue' inverted textAlign= 'center' 	>
                            Opened
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


