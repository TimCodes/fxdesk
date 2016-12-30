import React, { Component } from 'react';
import { Button, Card, Image, Segment, Flag, Dropdown, Grid, Header, Icon, Modal, Form, Checkbox } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';

import TradeTrackerService from '../../utils/TradeTrackerService';
import TradeTrackerList    from './TradeTrackerList';
import TradeTrackerForm    from './TradeTrackerForm'

    const trigger = (
    <i className="ellipsis vertical icon right floated"></i>
    )


    class TradeTracker extends Component {

        constructor(){
           
            super();
             this.dataService = new TradeTrackerService();
            this.state = {
                data:  this.dataService.getTrades(),
                visible: true,
                showModal : false
            };

            this.showModalVis = this.showModalVis.bind(this)
        }

        showModalVis(){
            console.log("set mdal vias")
            this.setState({
                showModal: true
            })
        }

        render(){ return (
        <div className = "ui container" >
            <Header as='h1' color = "pink" textAlign = 'center'>
                Trade Tracker  
              <Icon className= "right-algn" name='plus' onClick = {this.showModalVis}></Icon>
            </Header>
           <TradeTrackerList trades = {this.state.data} />
           <TradeTrackerForm showModal = {this.state.showModal} />
        </div> 
        )    
        }
    }

    export default TradeTracker;


