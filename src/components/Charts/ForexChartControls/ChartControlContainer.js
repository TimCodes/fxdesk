import React, {Component} from 'react';
import {  Menu } from 'semantic-ui-react'

import ChartTypeControl from './ChartTypeControl';
import PairSelectControl from './PairSelectControl';
import TimeFrameControl  from './TimeFrameControl';

class ChartControlContainer extends Component {

    render() {
        let {pair, timeFrame, chartType } = this.props.clickHandlers;
        console.log("control pairs-------", this.props)
        return (
            <Menu inverted compact>
                <PairSelectControl  pairClick = {pair} pairs = {this.props.pairs} pair={this.props.pair}/>
                <TimeFrameControl   timeFrameClick = {timeFrame} />
                <ChartTypeControl   chartTypeClick = {chartType}/>
            </Menu>
        );
    }
}

export default ChartControlContainer;