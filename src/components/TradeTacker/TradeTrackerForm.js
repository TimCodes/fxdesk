import React, { Component } from 'react';
import { Button,  Dropdown, Grid, Header, Icon, Modal, Form, Checkbox, TextArea, Select } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';


class TradeTrackerForm extends Component {

   constructor(props) {
    super(props);
    this.state = {
         formData: {} ,
         pairOptions: this.props.pairs.map(p =>  { return { text: p, value: p } } )
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
      console.log(this.state.formData)
      this.props.passData(this.state.formData);
  }

  componentWillReceiveProps(nextProps, nextState){
    if(nextProps.trade){
        this.setState({
            formData: nextProps.trade
        }, this.logChange)
    }
  }

  logChange(){
      console.log(this.state)
  }
  
  handleChange = (e, { value }) => this.setState({ value }, this.logChange)


  handleTextAreaChange(e){
      console.log(e.target.value)
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
                    <Select placeholder='Select Pair' options={this.state.pairOptions} value = {this.state.formData.pair} name = "pair" onChange={this.handleChange} />
                 </Form.Field>
                 <Form.Field>
                   <label>Status</label>
                   <input placeholder='Tracking' value = {this.state.formData.status}  onChange = {this.handleChange} name = "status" />
                 </Form.Field>
                 <Form.Field>
                   <label>Setup Type</label>
                   <input placeholder='Goodman' value = {this.state.formData.setupType}  onChange = {this.handleChange} name = "setupType" />
                </Form.Field>
                <Form.Field>
                    <label>Side</label>
                    <input placeholder='Buy' name = "side" value = {this.state.formData.side}  onChange = {this.handleChange} />
                </Form.Field>
                 <Form.Field>
                <TextArea label='Description' name = "description" placeholder='.'
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
