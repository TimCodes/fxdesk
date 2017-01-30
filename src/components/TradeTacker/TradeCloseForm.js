import React, { Component } from 'react';
import { Button,  Dropdown, Grid, Header, Icon, Modal, Form, Checkbox, TextArea } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import moment from 'moment'
require('react-datepicker/dist/react-datepicker-cssmodules.css')




class TradeCloseForm extends Component {

   constructor(props) {
    super(props);
     this.state = { formData: {},
    openDate: moment() ,
    closeDate: moment()
   };
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
      console.log(this.state, "--- close form submit ----")
      this.props.passData({...this.state.formData, closeDate : this.state.formData.closeDate.toString() });
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

  openDateChange = ( (d, e) =>  {  
       console.log(d)
      console.log("open date change")
      this.setState({ openDate: d } ) 
    })

  closeDateChange = ( (d, e) =>   {
      console.log(d)
      console.log("close date change")
      this.setState({ formData: { closeDate:  d } } )
   })
   
  handleTextAreaChange(e){
      console.log(e.target.value)
      this.setState({
          formData:{ description : e.target.value}
      })
  }

  render() { 
    return (  
            <Modal open = {this.props.showModal}>
                <Modal.Header className = "section-header">Close Trade 
                    <span className ='close-btn' onClick ={this.props.hideModal}> X </span>
                </Modal.Header>
                <Modal.Content  className = "form">
                <Form onSubmit = {this.handleSubmit}  className = "form">
                 <Form.Field>
                   <label>Pair</label>
                    <input    value = {this.state.formData.pair}  onChange = {this.handleChange} name = "pair"/>
                 </Form.Field>
                 <Form.Field>
                   <label>result</label>
                   <input  value = {this.state.formData.result}  onChange = {this.handleChange} name = "result" />
                 </Form.Field>
                 <Form.Field>
                   <label>Setup Type</label>
                   <input value = {this.state.formData.setupType}  onChange = {this.handleChange} name = "setupType" />
                </Form.Field>
                 <Form.Field>
                   <label>PnL</label>
                   <input  value = {this.state.formData.PnL}  onChange = {this.handleChange} name = "PnL" />
                </Form.Field>
                <Form.Field>
                    <label>Side</label>
                    <input name = "side" value = {this.state.formData.side}  onChange = {this.handleChange} />
                </Form.Field>
                <Form.Field>    
                    <label>Open DateTime</label>
                    <DatePicker
                    
                        selected = {this.state.openDate}
                        onChange={this.openDateChange} 
                        name = "openDate" 
                        id = "openDate"
                    />
        
                 </Form.Field>
                 <Form.Field>
                    <label>Close DatTime</label>
                  <DatePicker
                       selected = {this.state.formData.closeDate}
                        onChange={this.closeDateChange} 
                        name = "closeDate" 
                        id = 'closeDate'
                    />
                 </Form.Field>
                <Form.Field>
                <TextArea label='Description' name = "description" 
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