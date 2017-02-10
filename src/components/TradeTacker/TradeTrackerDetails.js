import React, { Component } from 'react';
import { Modal,  Statistic, Segment, Grid, Image} from 'semantic-ui-react';

// this may not be needed anymore
import Dropzone from 'react-dropzone';

import ForexChartContainer from '../Charts/ForexChartContainer';

class TradeTrackerDetails extends Component {

   constructor(props) {
    super(props);
    this.state = {
        trades  : [],
        description: ''    
    }
    
  }



  componentWillReceiveProps(nextProps, nextState){
    let trade = nextProps.trade;
    let newTradeState = []
    for(var p in trade){
        let obj = {}
        if(p !== "description"){
        obj.label = p;
        obj.value = trade[p];
        newTradeState.push(obj);
      }  
    }
    this.setState({
        trades : newTradeState,
        description : trade.description
    })

  }



  render() { 
    return (  
            <Modal open = {this.props.showModal}>
                <Modal.Header  className = "section-background">
                 <Segment inverted >
                        <Statistic.Group  widths='two' items={this.state.trades} inverted color='green' />
                 </Segment>
                   <Segment inverted>   {this.state.description} </Segment>
                 <span className ='close-btn' onClick ={this.props.hideModal}> X </span></Modal.Header>
                <Modal.Content  className = "section-background">
                    <Grid celled>
                        <Grid.Column width={16}>
                           <ForexChartContainer  pair ={this.props.trade.pair} height =  {400} />
                        </Grid.Column>
                    </Grid>
               </Modal.Content>
            </Modal>
        )    
    }
}

export default TradeTrackerDetails;
