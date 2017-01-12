import React, { Component } from 'react';
import {Grid, Image, Table, Icon, Segment, Statistic } from 'semantic-ui-react'
import { ChartCanvas, Chart, series, scale, coordinates, tooltip, axes, helper } from "react-stockcharts";
import { timeFormat } from "d3-time-format";
import {format} from 'd3'

import TradeHistoryService from '../../utils/TradeHistoryService';


let { BarSeries, LineSeries, AreaSeries, ScatterSeries, CircleMarker, SquareMarker, TriangleMarker } = series;
let { discontinuousTimeScaleProvider } = scale;

let { CrossHairCursor, MouseCoordinateX, MouseCoordinateY } = coordinates;

let { OHLCTooltip } = tooltip;
let { XAxis, YAxis } = axes;
let { fitWidth, TypeChooser } = helper


class TradeEquityChart extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
        this.dataService = new TradeHistoryService();
    }

    componentWillMount(){
        return  this.dataService.getEquityTestdata()
            .then(chartData => {
                console.log(chartData)
                this.setState({
                    data :this.dataService.formatEquityArr()
                 })
                this.dataService.generateEquityArr()
                console.log(this.dataService.formatEquityArr())
  
            }).catch(e => console.log(e))
    }
    render(){
         let { data, type, width, ratio } = this.props;
         if(this.state.data.length < 1 ){
             return <Grid.Row />
         }else{
         return (
            <Grid.Row>
                <Grid.Column width={16}>
                    <ChartCanvas ratio={ratio} width={width} height={400}
                            margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
                            type={type}
                            pointsPerPxThreshold={1}
                            seriesName="MSFT"
                            data={this.state.data}
                            xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}
                            xExtents={[new Date(2006, 0, 1), new Date(2006, 12, 2)]}>
                        <Chart id={1}
                                yExtents={d => [4000, 15000]}>
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

                                displayFormat={format(".2f")} />

                            <LineSeries
                                yAccessor={d => d.AAPLClose}
                                stroke="#ff7f0e"
                                strokeDasharray="Dot" />
                            <ScatterSeries
                                yAccessor={d => d.AAPLClose}
                                onClick = {this.hello}
                                marker={SquareMarker}
                                markerProps={{ width: 6, stroke: "#ff7f0e", fill: "#ff7f0e" }} />
                            <LineSeries
                                yAccessor={d => d.GEClose}
                                stroke="#2ca02c" />
                            <ScatterSeries
                                yAccessor={d => d.GEClose}
                                onClick = {this.hello}
                                marker={TriangleMarker}

                                displayFormat={format(".2f")}     
                                  
                            />
                           

                           
                        </Chart>
                        <CrossHairCursor />
                </ChartCanvas>

                </Grid.Column>
            </Grid.Row> 
                  
        )
       }     
    }
}

TradeEquityChart.propTypes = {
	data: React.PropTypes.array.isRequired,
	width: React.PropTypes.number.isRequired,
	ratio: React.PropTypes.number.isRequired,
	type: React.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

TradeEquityChart.defaultProps = {
	type: "hybrid",
};

TradeEquityChart = fitWidth(TradeEquityChart);

export default TradeEquityChart;

