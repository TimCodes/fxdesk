import React from 'react';
import ReactDOM from 'react-dom';
import Measure from 'react-measure'
import { Router } from 'react-router';
import { timeFormat } from "d3-time-format";
import {format} from 'd3'
import { scaleTime } from "d3-scale";
import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
import { ChartCanvas, Chart, series, scale, coordinates, tooltip, axes, indicator, helper } from "react-stockcharts";
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container, Modal, Dropdown, Input, Search } from 'semantic-ui-react'

var { CandlestickSeries, OHLCSeries } = series;
var { XAxis, YAxis } = axes;
var { fitWidth } = helper;
var { discontinuousTimeScaleProvider } = scale;


let { CrossHairCursor, MouseCoordinateX, MouseCoordinateY } = coordinates;

let { OHLCTooltip } = tooltip;

let pairOptions = [
						{value: 'EUR_USD', text: "EURUSD" } ,
						{value: "GBP_USD", text: "GBPUSD" },
						{value: "EUR_JPY",  text :"EURJPY"}
				]

class CandleStickChart extends React.Component {

	state = { activeItem: '15m',
		   	  containerDimensions: {}
		    }
	 handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	// maybe conditionally render this dependining 
	// if data is there or not
	render() {
		 const { activeItem } = this.state
		var { type, width, data, ratio } = this.props;

		return ( <Measure
        onMeasure={(dimensions) => {
		 console.log(dimensions)	
		 setTimeout(function () {
			 console.log(this.state)
		 }.bind(this), 300)
          return this.setState({ containerDimensions : dimensions}, console.log(this.state))
		
        }}
      >
	   <div className="chartWrapper">
		 <Menu inverted compact >
			
			<Menu.Item
				name='upcomingEvents'
				
				content='Upcoming Events'
				onClick={this.handleItemClick}
			>
			<Dropdown placeholder='EURUSD' fluid selection options={pairOptions} className = "section-background"/>
			</Menu.Item>
		
          
				<Menu.Item  >
				<Image src='/images/candlestick.png' size='mini'  bordered/>
				</Menu.Item>
				<Menu.Item  >
				<Image src='/images/bars.png' size='mini' bordered />
					</Menu.Item>
	
			<Menu.Item
			name='reviews'
				
				content={ 
					<Menu tabular compact size = "tiny" >
						<Menu.Item name='15m' active={activeItem === '15m'} onClick={this.handleItemClick} />
						<Menu.Item name='1h' active={activeItem === '1h'} onClick={this.handleItemClick} />
						<Menu.Item name='4h' active={activeItem === '4h'} onClick={this.handleItemClick} />
					</Menu>
				}
			
				>

				</Menu.Item>

            </Menu>
			<ChartCanvas 
					ratio={ratio} 
					width={this.state.containerDimensions.width} 
					height={this.state.containerDimensions.height - 60} 
					margin={{ left: 50, right: 100, top: 10, bottom: 30 }} type={type}
					
					data={data}
					xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}
					xExtents={[new Date(2016, 0, 1), new Date(2017, 6, 1)]}
					pointsPerPxThreshold={1}
					>

				<Chart id={1} yExtents={d => [d.high, d.low]}>
					<XAxis axisAt="bottom" orient="bottom"/>
                            <YAxis
                                axisAt="right"
                                orient="right"
                                stroke= "white"
                                tickStroke = "white"
                                ticks={5}
                            />
							 <XAxis axisAt="bottom" orient="bottom"
                                stroke= "white"
                                 tickStroke = "white"
                            />
                            <MouseCoordinateX
                                at="bottom"
                                orient="left"
								rectWidth = {125}
                                displayFormat={timeFormat("%y-%m-%dT%H:%M:%S")} />
                            <MouseCoordinateY
                                at="right"
								
                                displayFormat={format(".4")} />
					<CandlestickSeries
						  fill = {d => d.close > d.open ? "#64b734" : "#d55a49"}
					 	  opacity = {1}
					 />

				 <OHLCSeries
						  stroke = {d => d.close > d.open ? "#64b734" : "#d55a49"}
					 	  opacity = {1}
					 />
				</Chart>
				 <CrossHairCursor />
			</ChartCanvas>
			 <Modal size={'fullscreen'} open={false} onClose={this.close} inverted className="chartWrapper">
				
				
					<ChartCanvas ratio={ratio} width={1500} height={800} 
					margin={{ left: 50, right: 50, top: 10, bottom: 30 }} type={type}
					seriesName="MSFT"
					data={data}
					xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}
					xExtents={[new Date(2016, 0, 1), new Date(2017, 6, 1)]}>

				<Chart id={1} yExtents={d => [d.high, d.low]}>
					<XAxis axisAt="bottom" orient="bottom" ticks={10} stroke= "white"/>
					<YAxis axisAt="left" orient="left" ticks={5} />
					<CandlestickSeries
						  fill = {d => d.close > d.open ? "#64b734" : "#d55a49"}
					 	  opacity = {1}
					 />
					 	<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")} />
				</Chart>
				
			</ChartCanvas>
				
				
			  </Modal>
			</div>
		 </Measure>	
		);
	}
}


CandleStickChart.propTypes = {
	data: React.PropTypes.array.isRequired,
	width: React.PropTypes.number.isRequired,
	ratio: React.PropTypes.number.isRequired,
	type: React.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

CandleStickChart.defaultProps = {
	type: "svg",
};
CandleStickChart = fitWidth(CandleStickChart);

export default CandleStickChart;
