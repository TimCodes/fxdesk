import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { scaleTime } from "d3-scale";
import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
import { ChartCanvas, Chart, series, scale, coordinates, tooltip, axes, indicator, helper } from "react-stockcharts";
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'

var { CandlestickSeries } = series;
var { XAxis, YAxis } = axes;
var { fitWidth } = helper;



class CandleStickChart extends React.Component {

	// maybe conditionally render this dependining 
	// if data is there or not
	render() {
		var { type, width, data, ratio } = this.props;
		return (
			<ChartCanvas ratio={ratio} width={width} height={400}
					margin={{ left: 50, right: 50, top: 10, bottom: 30 }} type={type}
					seriesName="MSFT"
					data={data}
					xAccessor={d => d.date} xScale={scaleTime()}
					xExtents={[new Date(2012, 0, 1), new Date(2012, 6, 1)]}>

				<Chart id={1} yExtents={d => [d.high, d.low]}>
					<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
					<YAxis axisAt="left" orient="left" ticks={5} />
					<CandlestickSeries />
				</Chart>
			</ChartCanvas>
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
