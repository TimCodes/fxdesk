import React, { Component } from 'react';
import { Button,  Dropdown, Grid, Header, Icon, Modal, Form, Checkbox, TextArea, Select } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import moment from 'moment'
require('react-datepicker/dist/react-datepicker-cssmodules.css')




class TradeCloseForm extends Component {

   constructor(props) {
    super(props);
     this.state =
            { formData: {
             openDate: moment() ,
            closeDate: moment()
        },
        resultOptions : [ {text: 'WIN', value: "WIN"} , {text: 'LOSS', value: "LOSS" }  ],
        sideOptions : [ {text: 'BUY', value: "BUY"} , {text: 'SELL', value: "SELL" }  ]
     
   };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
   
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleSubmit = (e, { formData }) => {
  
    e.preventDefault()
    this.setState({ formData }, this.passData)
   
  }

  passData(){
    this.props.passData(this.state.formData)
  }


  componentWillReceiveProps(nextProps, nextState){
  
    if(nextProps.trade){
        this.setState({
            formData: nextProps.trade
        }, this.logChange)
    }
  }
  
  handleChange = (e, { value }) => this.setState({ value })

  openDateChange = ( (d, e) =>  {  
      this.setState({ openDate: d } ) 
    })

  closeDateChange = ( (d, e) =>   {
      this.setState({  closeDate:  d  } )
   })
   
  handleTextAreaChange(e){
      
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
                     <Select 
                        placeholder='WIN' options={this.state.resultOptions} 
                        value = {this.state.formData.result} name = "result" onChange={this.handleChange} 
                        className = "section-background"
                   />
                 </Form.Field>
                 <Form.Field>
                   <label>Setup Type</label>
                   <input value = {this.state.formData.setupType}  onChange = {this.handleChange} name = "setupType" />
                </Form.Field>
                 <Form.Field>
                   <label>PnL</label>
                   <input  value = {this.state.formData.PNL}  onChange = {this.handleChange} name = "PNL" />
                </Form.Field>
                <Form.Field>
                    <label>Side</label>
                     <Select   placeholder='BUY' options={this.state.sideOptions} 
                        value = {this.state.formData.side} name = "side" onChange={this.handleChange} 
                        className = "section-background"
                        readonly
                   />
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
                       selected = {this.state.closeDate}
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

