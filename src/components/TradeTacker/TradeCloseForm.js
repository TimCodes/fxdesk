import React, { Component } from 'react';
import { Button,  Dropdown, Grid, Header, Icon, Modal, Form, Checkbox, TextArea } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';



class TradeCloseForm extends Component {

   constructor(props) {
    super(props);
    this.state = { formData: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    console.log("-- form props --", this.props)
    
  }

  handleSubmit = (e, { formData }) => {
    e.preventDefault()
    this.setState({ formData }, this.passData)
  }

  passData(){
      console.log(this.state)
      this.props.passData(this.state.formData);
  }

  componentWillReceiveProps(nextProps, nextState){
    // perform any preparations for an upcoming update
    console.log("tadee form update hook")
    console.log(nextProps)
    if(nextProps.trade){
        this.setState({
            formData: nextProps.trade
        }, this.logChange)
    }
  }

  logChange(){
      console.log(this.state)
  }
  
  handleChange = (e, { value }) => this.setState({ value })

  handleTextAreaChange(e){
      console.log(e.target.value)
      this.setState({
          formData:{ description : e.target.value}
      })
  }

  render() { 
    return (  
            <Modal open = {this.props.showModal}>
                <Modal.Header>Track New Trade <span className ='close-btn' onClick ={this.props.hideModal}> X </span></Modal.Header>
                <Modal.Content >
                <Form onSubmit = {this.handleSubmit} >
                 <Form.Field>
                   <label>Pair</label>
                    <input   placeholder='EURUSD' value = {this.state.formData.pair}  onChange = {this.handleChange} name = "pair"/>
                 </Form.Field>
                 <Form.Field>
                   <label>Status</label>
                   <input placeholder='WIN' value = {this.state.formData.result}  onChange = {this.handleChange} name = "result" />
                 </Form.Field>
                 <Form.Field>
                   <label>Setup Type</label>
                   <input placeholder='Goodman' value = {this.state.formData.setupType}  onChange = {this.handleChange} name = "setupType" />
                </Form.Field>
                 <Form.Field>
                   <label>PnL</label>
                   <input placeholder='12.00' value = {this.state.formData.PnL}  onChange = {this.handleChange} name = "PnL" />
                </Form.Field>
                <Form.Field>
                    <label>Side</label>
                    <input placeholder='Buy' name = "side" value = {this.state.formData.side}  onChange = {this.handleChange} />
                </Form.Field>
                 <Form.Field>
                    <label>Open DateTime</label>
                    <input placeholder='12-25-206:9:54am' name = "openDate" value = {this.state.formData.openDate}  onChange = {this.handleChange} />
                </Form.Field>
                 <Form.Field>
                    <label>Close DatTime</label>
                    <input placeholder='12-25-206:9:54am' name = "closenDate" value = {this.state.formData.closeDate}  onChange = {this.handleChange} />
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

export default TradeCloseForm;


//   <Dropzone >
//                     <div>Try dropping some files here, or click to select files to upload.</div>
//                </Dropzone>