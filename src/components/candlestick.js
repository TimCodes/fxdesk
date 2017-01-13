import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { timeFormat } from "d3-time-format";
import {format} from 'd3'
import { scaleTime } from "d3-scale";
import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
import { ChartCanvas, Chart, series, scale, coordinates, tooltip, axes, indicator, helper } from "react-stockcharts";
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container, Modal } from 'semantic-ui-react'

var { CandlestickSeries } = series;
var { XAxis, YAxis } = axes;
var { fitWidth } = helper;
var { discontinuousTimeScaleProvider } = scale;


let { CrossHairCursor, MouseCoordinateX, MouseCoordinateY } = coordinates;

let { OHLCTooltip } = tooltip;

class CandleStickChart extends React.Component {

	// maybe conditionally render this dependining 
	// if data is there or not
	render() {
		var { type, width, data, ratio } = this.props;
		return (
			<div className="chartWrapper">
			<ChartCanvas ratio={ratio} width={width} height={700} 
					margin={{ left: 50, right: 50, top: 10, bottom: 30 }} type={type}
					seriesName="MSFT"
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
                                // tickInterval={5}
                                // tickValues={[40, 60]}
                                ticks={5}
                            />
                            <MouseCoordinateX
                                at="bottom"
                                orient="bottom"
                                displayFormat={timeFormat("%Y-%m-%d")} />
                            <MouseCoordinateY
                                at="right"
								hideLine = {false}	
								
                                displayFormat={format(".4")} />
					<CandlestickSeries
						  fill = {d => d.close > d.open ? "#64b734" : "#d55a49"}
					 	  opacity = {1}
					 />
					 
				</Chart>
				 <CrossHairCursor />
			</ChartCanvas>
			 <Modal size={'fullscreen'} open={true} onClose={this.close} inverted className="chartWrapper">
				
				
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
