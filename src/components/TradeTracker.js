import React, { Component } from 'react';
import { Button, Card, Image, Segment, Flag, Dropdown, Grid, Header, Icon, Modal, Form, Checkbox } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';

import TradeTrackerService from '../utils/TradeTrackerService';


    const trigger = (
    <i className="ellipsis vertical icon right floated"></i>
    )


    class TradeTracker extends Component {

        constructor(){
            super();

            this.state = {
                data:  [1,2,3,4],
                visible: true,
                addModalVis : false
            };

            this.showModalVis = this.showModalVis.bind(this)
        }

        showModalVis(){
            console.log("set mdal vias")
            this.setState({
                addModalVis: true
            })
        }

        render(){ return (
        <div className = "ui container" >
            <Header as='h1' color = "pink" textAlign = 'center'>
                Trade Tracker  
              <Icon className= "right-algn" name='plus' onClick = {this.showModalVis}></Icon>
            </Header>
            <Grid>
            {this.state.data.map( (e, idx) => {
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
            
            <Modal open = {this.state.addModalVis}>
                <Modal.Header>Track New Trade</Modal.Header>
                <Modal.Content >
                <Form>
                 <Form.Field>
                   <label>Pair</label>
                    <input placeholder='EURUSD' />
                 </Form.Field>
                 <Form.Field>
                   <label>Status</label>
                   <input placeholder='Tracking' />
                 </Form.Field>
                 <Form.Field>
                   <label>Setup Type</label>
                   <input placeholder='Goodman' />
                </Form.Field>
                <Form.Field>
                    <label>Side</label>
                    <input placeholder='Buy' />
                </Form.Field>
                <Form.TextArea label='Description' placeholder='Tell us more about you...' />
                <Dropzone >
                    <div>Try dropping some files here, or click to select files to upload.</div>
               </Dropzone>
               <Button type='submit'>Submit</Button>
              </Form>
               </Modal.Content>
            </Modal>
        </div> 
        )    
        }
    }

    export default TradeTracker;


