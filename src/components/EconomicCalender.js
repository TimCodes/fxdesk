import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react'


class EconomicCalender extends Component {
   constructor(props) {
    super(props);

    this.state = {
      data: getD(),
      visible: false
      
    };
  }
    render(){ console.log(this.state.data); return (
        <div dangerouslySetInnerHTML={{__html:this.state.data}} className = "ui container"> 
        
        </div>   
    )    
    }
}

export default EconomicCalender;

function getD(){
let t= `<iframe src="http://ec.forexprostools.com?ecoDayBackground=%23140101&columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=week&timeZone=55&lang=1" width="1000" height="1000" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0" style = "background-color: black;"></iframe>`;
return t
}