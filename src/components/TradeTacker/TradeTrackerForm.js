import React, { Component } from 'react';
import { Button,  Dropdown, Grid, Header, Icon, Modal, Form, Checkbox } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';



class TradeTrackerForm extends Component {

  render(){ return (
             
            <Modal open = {this.props.showModal}>
                <Modal.Header>Track New Trade</Modal.Header>
                <Modal.Content >
                <Form>
                 <Form.Field>
                   <label>Pair</label>
                    <input placeholder='EURUSD' />
                 </Form.Field>
                 <Form.Field>
                   <label>Status</label>
                   <input placeholder='Tracking' />
                 </Form.Field>
                 <Form.Field>
                   <label>Setup Type</label>
                   <input placeholder='Goodman' />
                </Form.Field>
                <Form.Field>
                    <label>Side</label>
                    <input placeholder='Buy' />
                </Form.Field>
                <Form.TextArea label='Description' placeholder='Tell us more about you...' />
                <Dropzone >
                    <div>Try dropping some files here, or click to select files to upload.</div>
               </Dropzone>
               <Button type='submit'>Submit</Button>
              </Form>
               </Modal.Content>
            </Modal>
        )    
    }
}

export default TradeTrackerForm;


