import React, {Component} from 'react';
import {  Menu} from 'semantic-ui-react' ;

class TimeFrameControl extends Component {
   state = { activeItem: '15m',
		   	  containerDimensions: {}
		    }
   
   handleItemClick = (e, { name }) => { 
                         this.props. timeFrameClick(name)
                         this.setState({ activeItem: name })
                       }  
	// maybe conditionally render this dependining 
    render() {
        const { activeItem } = this.state;
        return (
            <Menu tabular compact size = "tiny" >
						<Menu.Item name='15m' active={activeItem === '15m'} onClick={this.handleItemClick} />
						<Menu.Item name='1h' active={activeItem === '1h'} onClick={this.handleItemClick} />
						<Menu.Item name='4h' active={activeItem === '4h'} onClick={this.handleItemClick} />
		    </Menu>
        );
    }
}

export default TimeFrameControl;