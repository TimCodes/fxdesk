import React, {Component} from 'react';
import { Menu,  Dropdown} from 'semantic-ui-react' ;


let pairOptions = [
						{value: 'EUR_USD', text: "EURUSD" } ,
						{value: "GBP_USD", text: "GBPUSD" },
						{value: "EUR_JPY",  text :"EURJPY"}
				]

class PairSelectControl extends Component {
	
	 constructor(props) {
		super(props)
		this.c= this.c.bind(this)
	}

  	state = { activeItem: '15m',
		   	  containerDimensions: {}
		    }
	
	handleItemClick = (e) => { 
						
						setTimeout(e =>  { 
							let value = this.textInput.getSelectedItem().value
							this.props.pairClick(value)
						}, 10)
                        // this.setState({ activeItem: name })
                       }  
	c = (e) => console.log(e)
    render() {
        const { activeItem } = this.state;
        return (
            <Menu.Item>
             <Dropdown 
			 	placeholder='EURUSD' 
				fluid 
				options={pairOptions} 
				className = "section-background"
				onChange = {this.handleItemClick}	
				ref={(input) => { this.textInput = input; }}
			 />
            </Menu.Item> 
        );
    }
}

export default PairSelectControl;