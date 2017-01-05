import React, { Component } from 'react';
import { Modal,  Statistic, Segment, Grid, Image} from 'semantic-ui-react'
import Dropzone from 'react-dropzone';

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
                <Modal.Header>
                 <Segment inverted >
                        <Statistic.Group  widths='two' items={this.state.trades} inverted color='green' />
                 </Segment>
                 <span className ='close-btn' onClick ={this.props.hideModal}> X </span></Modal.Header>
                <Modal.Content >
                    <Grid celled>
                        <Grid.Row>
                        <Grid.Column width={4}>
                            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                             <Segment>   {this.state.description} </Segment>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                      
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
               </Modal.Content>
            </Modal>
        )    
    }
}

export default TradeTrackerDetails;
