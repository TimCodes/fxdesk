import React, {Component} from 'react';
import { Menu,  Dropdown, Select} from 'semantic-ui-react' ;


let pairOptions = [
						{value: 'EUR_USD', text: "EURUSD" } ,
						{value: "GBP_USD", text: "GBPUSD" },
						{value: "EUR_JPY",  text :"EURJPY"}
				]

class PairSelectControl extends Component {
	
	 constructor(props) {
		super(props)
		this.state = { 
		  	  activeItem: '15m',
		   	  containerDimensions: {},
			  pairOptions: this.props.pairs.map(p =>  { return { text: p, value: p } } ),
			  pair: "EURUSD"
		    }
	
	 }
    
	 componentWillMount(){
		 if(this.props.pair){
			 this.setState({pair: this.props.pair})
		 }
	 }
  
	
	handleChange = (e, { value }) => this.props.pairClick(value) 

    render() {
        return (
            <Menu.Item>
            
			   <Select className = "section-background" 
			   	placeholder= {this.state.pair} 
			    options={this.state.pairOptions} 
				name = "pair" 
				onChange = {this.handleChange}
			    />
            </Menu.Item> 
        );
    }
}

export default PairSelectControl;