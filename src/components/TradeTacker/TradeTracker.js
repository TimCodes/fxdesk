import React, { Component } from 'react';
import { Button, Card, Image, Segment, Flag, Dropdown, Grid, Header, Icon, Modal, Form, Checkbox } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';

import TradeTrackerService from '../../utils/TradeTrackerService';
import TradeTrackerList    from './TradeTrackerList';
import TradeTrackerForm    from './TradeTrackerForm'
import TradeTrackerDetails from './TradeTrackerDetails';

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
                showFormModal : false,
                showDetailsModal : false,
                trade : {},
                tradeIdx: null,
                tradeAction: null
            };

            this.showModalVis     = this.showModalVis.bind(this);
            this.hideModalVis     = this.hideModalVis.bind(this);
            this.hideDetailModal  = this.hideDetailModal.bind(this);
            this.addTrade         = this.addTrade.bind(this);
            this.editTrade        = this.editTrade.bind(this);
            this.newTrade         = this.newTrade.bind(this);
            this.handleSave       = this.handleSave.bind(this)
            this.updateTrade      = this.updateTrade.bind(this)
            this.viewTrade        = this.viewTrade.bind(this);
            this.deleteTrade      = this.deleteTrade.bind(this);
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
                showFormModal: true
            })
        }

        hideModalVis(){
            this.setState({
                showFormModal: false
            })
        }

        hideDetailModal(){
            this.setState({
                showDetailsModal: false
            })
        }

        addTrade(trade){
            this.dataService.create(trade);
            this.updateTradeList();
        }

        updateTrade(trade, tradeIdx){
            this.dataService.update(tradeIdx, trade)
            this.updateTradeList();
            console.log("update trade ")
        }

        updateTradeList(){
           this.setState({
                data : this.dataService.getTrades()
            })
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
            this.setState({
                trade: trade,
                tradeAction: 'EDIT',
                tradeIdx: newTradeIdx
            }, this.showModalVis)
        }
       
        viewTrade(viewTrade){
           
            this.setState({
                showDetailsModal: true,
                trade : viewTrade
            })
        }

        deleteTrade(trade, tradeIdx){
            this.dataService.delete(tradeIdx)
            this.updateTradeList();
        }
     

        render(){ 
            return (
            <div className = "ui container" >
                <Header as='h1' color = "pink" textAlign = 'center'>
                    Trade Tracker  
                <Icon className= "right-algn" name='plus' onClick = {this.newTrade}></Icon>
                </Header>
                <TradeTrackerList 
                    trades      = {this.state.data} 
                    editTrade   = {this.editTrade}  
                    viewTrade   = {this.viewTrade}
                    deleteTrade = {this.deleteTrade}
                />
                <TradeTrackerForm 
                    showModal = {this.state.showFormModal} 
                    hideModal = {this.hideModalVis} 
                    passData  = {this.handleSave} 
                    trade     = {this.state.trade}
                    action    = {this.state.tradeAction}
                />
                <TradeTrackerDetails
                    showModal  = {this.state.showDetailsModal}
                    trade      = {this.state.trade}
                    hideModal  = {this.hideDetailModal}
                />
            </div> 
        )    
        }
    }

    export default TradeTracker;


