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

  
  passData(){
      console.log(this.state)
       
      this.props.passData(this.state.formData);
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
    console.log("details props -- ", nextProps)
  }



  render() { 
    return (  
            <Modal open = {this.props.showModal}>
                <Modal.Header  className = "section-background">
                 <Segment inverted   >
                        <Statistic.Group  widths='two' items={this.state.trades} inverted color='green' />
                 </Segment>
                   <Segment inverted>   {this.state.description} </Segment>
                 <span className ='close-btn' onClick ={this.props.hideModal}> X </span></Modal.Header>
                <Modal.Content  className = "section-background">
                    <Grid celled>
                        <Grid.Row>
                        <Grid.Column width={16}>
                           <ForexChartContainer  pair ="EUR_GBP"/>
                      
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
               </Modal.Content>
            </Modal>
        )    
    }
}

export default TradeTrackerDetails;
