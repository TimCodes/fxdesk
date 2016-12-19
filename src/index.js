import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { scaleTime } from "d3-scale";
import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
import { ChartCanvas, Chart, series, scale, coordinates, tooltip, axes, indicator, helper } from "react-stockcharts";
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'


import CandleStickChart from "./components/candlestick";
import App from './App';
import './index.css';
var { CandlestickSeries } = series;
var { XAxis, YAxis } = axes;
var { fitWidth } = helper;


var parseDate = timeParse("%Y-%m-%d");
fetch("http://rrag.github.io/react-stockcharts/data/MSFT.tsv")
		.then(response => response.text())
		.then(data => tsvParse(data, d => {
			d.date = new Date(parseDate(d.date).getTime());
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;

			return d;
		}))
		.then(data => {
                        
            ReactDOM.render(
            <App data={data} type={'svg'} />,
            document.getElementById('root')
            )
			//ReactDOM.render(<Chart data={data} type="hybrid"/>, document.getElementById("chart"));
		});

