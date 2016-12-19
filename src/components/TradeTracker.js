import React, { Component } from 'react';
import { Button, Card, Image, Segment, Flag, Dropdown, Grid } from 'semantic-ui-react'


const trigger = (
   <i className="ellipsis vertical icon right floated"></i>
)


class TradeTracker extends Component {

    constructor(){
        super();
     this.state = {
        data:  [1,2,3,4],
        visible: true
      
     };
    }

    render(){ return (
      <div className = "ui container" >

        <Grid>
          {this.state.data.map( (e, idx) => {
            return (   
          <Grid.Column  computer={5} mobile = {9}>      
          <Card color='green' key = {idx}  fluid className = "blue-bg"> 
            <Card.Content >
               
                  <Dropdown  inline trigger={trigger} icon  null className ='right floated' pointing = 'left top'>
                    <Dropdown.Menu>
                    <Dropdown.Item text='New' />
                    <Dropdown.Item text='Open...' description='ctrl + o' />
                    <Dropdown.Item text='Save as...' description='ctrl + s' />

                    <Dropdown.Item text='Rename' description='ctrl + r' />
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
       
       </div> 
    )    
    }
}

export default TradeTracker;


