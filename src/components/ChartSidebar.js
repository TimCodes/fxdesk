import React, { Component } from 'react';
import { Link } from 'react-router';
import { Sidebar, Menu, Icon } from 'semantic-ui-react'


class ChartSidebar extends Component {

    render(){ return (
        <Sidebar as={Menu} animation='overlay' width='very thin' visible={this.props.visible} icon='labeled' vertical inverted>
           <Menu fluid vertical inverted size='mini' className= "main"  color="blue" >
            <Menu.Item name='home' data-content="Play Music" fitted>
              <Icon name='home' className = "whiteIcon" />
            </Menu.Item>
            <Menu.Item name='charts' fitted>
              <Link to="charts"><Icon name='line chart' className = "whiteIcon" /></Link>
            </Menu.Item>
             <Menu.Item name='trades' fitted>
              <Link to="trades"><Icon name='file text' className = "whiteIcon" /></Link>
            </Menu.Item>
            <Menu.Item name='gamepad' fitted >
              <Icon name='folder' className = "whiteIcon" />
            </Menu.Item>
            <Menu.Item name='gamepad' fitted>
              <Icon name='calendar' className = "whiteIcon" />
            </Menu.Item>
            <Menu.Item name='calculator' fitted>
              <Link to="tools"><Icon name='newspaper' className = "whiteIcon" /></Link>
            </Menu.Item>
            <Menu.Item name='calculator' fitted>
              <Icon name='calculator' className = "whiteIcon" />
            </Menu.Item>
          
           </Menu> 
          </Sidebar>
    )    
    }
}

export default ChartSidebar 