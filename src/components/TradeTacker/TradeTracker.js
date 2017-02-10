import React, { Component } from 'react';
import {  Grid, Header, Icon } from 'semantic-ui-react'
//import Dropzone from 'react-dropzone';

import {getServiceContainer} from '../../utils/ServicesContainer';

import TradeTrackerList    from './TradeTrackerList';
import TradeTrackerForm    from './TradeTrackerForm'
import TradeCloseForm      from './TradeCloseForm'
import TradeTrackerDetails from './TradeTrackerDetails';


class TradeTracker extends Component {

        constructor(){
           
            super();
            this.tradeTrackerService = getServiceContainer().tracker;
            this.TradeHistoryService = getServiceContainer().history;
            this.TradeDataService    = getServiceContainer().data;
            
            this.state = {
                data:  this.tradeTrackerService.getTrades(),
                availablePairs : this.TradeDataService.getAvailablePairs(),
                visible: true,
                showFormModal : false,
                showDetailsModal : false,
                showCloseFormModal: false, 
                trade : {},
                tradeIdx: null,
                tradeAction: null

            };

         
            this.showModalVis       = this.showModalVis.bind(this);
            this.hideModalVis       = this.hideModalVis.bind(this);
            this.hideDetailModal    = this.hideDetailModal.bind(this);
            this.hideCloseFormModal = this.hideCloseFormModal.bind(this);
            this.addTrade           = this.addTrade.bind(this);
            this.showEditTradeView  = this.showEditTradeView.bind(this);
            this.newTrade           = this.newTrade.bind(this);
            this.handleSave         = this.handleSave.bind(this)
            this.updateTrade        = this.updateTrade.bind(this)
            this.showViewTrade      = this.showViewTrade.bind(this);
            this.showCloseTradeView = this.showCloseTradeView.bind(this);
            this.deleteTrade        = this.deleteTrade.bind(this);
        }
        
        newTrade(){
            this.setState({
                tradeAction: 'CREATE',
                trade: {}
            }, this.showModalVis)
        }

        showModalVis(){
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

        hideCloseFormModal(){
            this.setState({
                showCloseFormModal: false
            })
        }

        addTrade(trade){
            this.tradeTrackerService.create(trade);
            this.updateTradeList();
        }

        updateTrade(trade, tradeIdx){
            this.tradeTrackerService.update(tradeIdx, trade)
            this.updateTradeList();
        }

        updateTradeList(){
           this.setState({
                data : this.tradeTrackerService.getTrades()
            })
        }

        handleSave(trade){
            if(this.state.tradeAction === "CREATE"){
              this.addTrade(trade)   
            }else if(this.state.tradeAction === "EDIT"){
              this.updateTrade(trade,this.state.tradeIdx)
            }else if(this.state.tradeAction === "CLOSE"){
              this.TradeHistoryService.create(trade);
              this.tradeTrackerService.delete(this.state.tradeIdx);
              this.hideCloseFormModal()
            }
            this.hideModalVis();
        }
        
        showEditTradeView(trade, newTradeIdx){
            this.setState({
                trade: trade,
                tradeAction: 'EDIT',
                tradeIdx: newTradeIdx
            }, this.showModalVis)
        }
       
        showViewTrade(viewTrade){
          this.setState({
                showDetailsModal: true,
                trade : viewTrade
            })
        }

        showCloseTradeView(cTrade, cIdx){
            this.setState(
                {
                    showCloseFormModal: true,
                    trade: cTrade,
                    tradeAction: 'CLOSE',
                    tradeIdx: cIdx
                }
            )
        }

        deleteTrade(trade, tradeIdx){
            this.tradeTrackerService.delete(tradeIdx)
            this.updateTradeList();
        }
     
        render(){ 
            return (
             <Grid doubling padded className = "padded-grid">
                   <Grid.Column width	= {16} >> 
                        <Icon  size='big' className='btn right-algn' name='plus' circular onClick={this.newTrade}></Icon>
                        <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                            <span>Trade Tracker  </span><span> </span>
                        </Header>
                   </Grid.Column>
                   <TradeTrackerList 
                        trades      ={this.state.data} 
                        editTrade   = {this.showEditTradeView}  
                        viewTrade   = {this.showViewTrade}
                        deleteTrade = {this.deleteTrade}
                        closeTrade  = {this.showCloseTradeView}
                    />
                    <TradeTrackerForm 
                        showModal = {this.state.showFormModal} 
                        hideModal = {this.hideModalVis} 
                        passData  = {this.handleSave} 
                        trade     = {this.state.trade}
                        action    = {this.state.tradeAction}
                        pairs     = {this.state.availablePairs}
                    />
                    <TradeCloseForm 
                        showModal = {this.state.showCloseFormModal} 
                        hideModal = {this.hideCloseFormModal} 
                        passData  = {this.handleSave} 
                        trade     = {this.state.trade}
                    />
                    <TradeTrackerDetails
                        showModal  = {this.state.showDetailsModal}
                        trade      = {this.state.trade}
                        hideModal  = {this.hideDetailModal}
                    />
               </Grid>  
              

        )    
        }
}

    export default TradeTracker;


