import React, { Component } from 'react';
import { Link } from 'react-router';
import { Sidebar, Menu, Icon } from 'semantic-ui-react'


class ChartSidebar extends Component {

    render(){ return (
        <Sidebar as={Menu} animation='overlay' width='very thin' visible={this.props.visible} icon='labeled' vertical inverted>
           <Menu fluid vertical inverted size='mini' className= "main"  color="blue" >
            <Menu.Item name='home' data-content="Home" fitted>
              <Icon name='home' className = "whiteIcon" />
            </Menu.Item>
             <Link to="charts">
              <Menu.Item name='charts' fitted>
                <Icon name='line chart' className = "whiteIcon" />
              </Menu.Item>
             </Link> 
             <Link to="trades">
              <Menu.Item name='trades' fitted>
              <Icon name='file text' className = "whiteIcon" />
              </Menu.Item>
            </Link>  
            <Menu.Item name='gamepad' fitted >
              <Icon name='folder' className = "whiteIcon" />
            </Menu.Item>
            <Link to="calender">
              <Menu.Item name='calender' fitted>
                <Icon name='calendar' className = "whiteIcon" />
              </Menu.Item>
             </Link> 
            <Link to="tools"> 
              <Menu.Item name='news' fitted>
                <Icon name='newspaper' className = "whiteIcon" />
              </Menu.Item>
            </Link>  
            <Menu.Item name='calculator' fitted>
              <Icon name='calculator' className = "whiteIcon" />
            </Menu.Item>
          
           </Menu> 
          </Sidebar>
    )    
    }
}

export default ChartSidebar 