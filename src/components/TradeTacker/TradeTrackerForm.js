import React, { Component } from 'react';
import { Button,  Dropdown, Grid, Header, Icon, Modal, Form, Checkbox, TextArea, Select } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';


class TradeTrackerForm extends Component {

   constructor(props) {
    super(props);
    this.state = {
         formData: {} ,
         pairOptions: this.props.pairs.map(p =>  { return { text: p, value: p } } ),
         statusOptions : [{text: 'TRACKING', value: "TRACKING"} , {text: 'OPEN', value: "OPEN" }  ],
         sideOptions : [{text: 'BUY', value: "BUY"} , {text: 'SELL', value: "SELL" }  ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
  }

  handleSubmit = (e, { formData }) => {
    e.preventDefault()
    this.setState({ formData }, this.passData)
  }

  passData(){
      this.props.passData(this.state.formData);
  }

  componentWillReceiveProps(nextProps, nextState){
    if(nextProps.trade){
        this.setState({
            formData: nextProps.trade
        }, this.logChange)
    }
  }
  
  handleChange = (e, { value }) => this.setState({ value })

  handleTextAreaChange(e){
      this.setState({
          formData:{ description : e.target.value}
      })
  }

  render() { 
    return (  
            <Modal open = {this.props.showModal}>
                <Modal.Header className = "section-header">Track New Trade <span className ='close-btn' onClick ={this.props.hideModal}> X </span></Modal.Header>
                <Modal.Content  className = "form">
                <Form onSubmit = {this.handleSubmit} >
                 <Form.Field>
                   <label>Pair</label>
                    <Select 
                         placeholder='Select Pair' options={this.state.pairOptions} 
                         value = {this.state.formData.pair} name = "pair" onChange={this.handleChange} 
                         className = "section-background"
                     />
                 </Form.Field>
                 <Form.Field>
                   <label>Status</label>
                    <Select 
                        placeholder='TRACKING' options={this.state.statusOptions} 
                        value = {this.state.formData.status} name = "status" onChange={this.handleChange} 
                        className = "section-background"
                  />
                 </Form.Field>
                 <Form.Field>
                   <label>Setup Type</label>
                   <input placeholder='Goodman' value = {this.state.formData.setupType}  onChange = {this.handleChange} name = "setupType" />
                </Form.Field>
                <Form.Field>
                    <label>Side</label>
                    <Select 
                        placeholder='BUY' options={this.state.sideOptions} 
                        value =  {this.state.formData.status} name = "side" onChange={this.handleChange}
                        className = "section-background"
                    />
                </Form.Field>
                <Form.Field>
                    <TextArea label='Description' name = "description" placeholder='Give a description'
                    value = {this.state.formData.description}  
                    onChange = {this.handleTextAreaChange}
                    />
                </Form.Field>     
               <Button  type='submit'>Submit</Button>
              </Form>
               </Modal.Content>
            </Modal>
        )    
    }
}

export default TradeTrackerForm;
