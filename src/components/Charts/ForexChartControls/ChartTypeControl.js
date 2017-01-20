import {  Menu, Image } from 'semantic-ui-react' ;

import React, {Component} from 'react';

class ChartTypeControl extends Component {
    state = { activeItem: 'bar' }

    handleItemClick = (e, { name }) => { 
                        this.props.chartTypeClick(name)
                        this.setState({ activeItem: name })
                      }  

    render() {
        const { activeItem } = this.state;
        return (
        <Menu tabular compact size = "tiny" >
		  <Menu.Item name='candlestick' active={activeItem === 'candlestick'} onClick={this.handleItemClick} >
            <Image src='/images/candlestick.png' size='mini' />
          </Menu.Item>   
          <Menu.Item name='bar' active={activeItem === 'bar'} onClick={this.handleItemClick} >
            <Image src='/images/bars.png' size='mini' />
          </Menu.Item> 		
		</Menu>
        );
    }
}

export default ChartTypeControl;