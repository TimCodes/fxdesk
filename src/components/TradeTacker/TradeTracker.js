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
                showModal : false,
                trade : {},
                tradeIdx: null,
                tradeAction: null
            };

            this.showModalVis = this.showModalVis.bind(this);
            this.hideModalVis = this.hideModalVis.bind(this);
            this.addTrade     = this.addTrade.bind(this);
            this.editTrade    = this.editTrade.bind(this);
            this.newTrade     = this.newTrade.bind(this);
            this.handleSave   = this.handleSave.bind(this)
            this.updateTrade  = this.updateTrade.bind(this)
        }
        
        newTrade(){
            this.setState({
                tradeAction: 'CREATE',
                trade: {}
            }, this.showModalVis)
        }

        showModalVis(){
            console.log("set mdal vias")
            this.setState({
                showModal: true
            })
        }

        hideModalVis(){
            this.setState({
                showModal: false
            })
        }

        addTrade(trade){
            this.dataService.create(trade);
            this.setState({
                data : this.dataService.getTrades()
            })
        }

        updateTrade(trade, tradeIdx){
            this.dataService.update(tradeIdx, trade)
             this.setState({
                data : this.dataService.getTrades()
            })
            console.log("update trade ")
        }

        handleSave(trade){
            if(this.state.tradeAction === "CREATE"){
                this.addTrade(trade)   
            }else if(this.state.tradeAction === "EDIT"){
                this.updateTrade(trade,this.state.tradeIdx)
            }

            this.hideModalVis();
        }
        
        editTrade(trade, newTradeIdx){
            console.log('eidit trade', newTradeIdx)
            this.setState({
                trade: trade,
                tradeAction: 'EDIT',
                tradeIdx: newTradeIdx
            }, this.showModalVis)
        }
       
     

        render(){ return (
        <div className = "ui container" >
            <Header as='h1' color = "pink" textAlign = 'center'>
                Trade Tracker  
              <Icon className= "right-algn" name='plus' onClick = {this.newTrade}></Icon>
            </Header>
           <TradeTrackerList trades = {this.state.data} editTrade = {this.editTrade}   />
           <TradeTrackerForm 
            showModal = {this.state.showModal} 
            hideModal = {this.hideModalVis} 
            passData  = {this.handleSave} 
            trade     = {this.state.trade}
            action    = {this.state.tradeAction}
           />
        </div> 
        )    
        }
    }

    export default TradeTracker;


