import React from 'react';
import DatePicker from 'react-datepicker';

const OpenDatePicker = (props) => (<DatePicker
                                selected={props.selected}
                                onChange={props.onChange} 
                                name = "openDate" 
                                id = "openDate"
/>)

export default OpenDatePicker;
