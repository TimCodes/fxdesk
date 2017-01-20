import React, {Component} from 'react';
import { ChartCanvas, Chart, series,  axes, coordinates, scale, helper} from "react-stockcharts";
import { timeFormat } from "d3-time-format";
import {format} from 'd3';



var { CandlestickSeries, OHLCSeries, AreaSeries } = series;
var { XAxis, YAxis } = axes;
let { CrossHairCursor, MouseCoordinateX, MouseCoordinateY } = coordinates;
var { discontinuousTimeScaleProvider } = scale;
var { fitWidth } = helper;

class ForexChart extends Component {
   
    constructor(props) {
        let maxDate = new Date()
        maxDate.setDate( maxDate.getDate() + 2 )
        super(props);
        this.state = { 
           minDate : null,
           maxDate: maxDate
        }
        
    }
    
    componentWillReciveProps(){
       this.setMinMaxDate() 
    }

    componentDidMount(){
        this.setMinMaxDate()
    }
    getSeries(){

        let {seriesType } = this.props;
        let series = "";
         
    
        switch(seriesType){
            case "candlestick" :  
                series =  <CandlestickSeries
                            fill={d => d.close > d.open ? "#64b734" : "#d55a49"}
                            opacity={1}
                        />
                break;  

            case "bar" :  
                series = <OHLCSeries
                            stroke={d => d.close > d.open ? "#64b734" : "#d55a49"}
                            opacity={1}
                        /> 
                break; 

            case "area" :  
                series =  <AreaSeries
                             yAccessor={(d) => d.close}
                             opacity={.4}
                             fill="#4059ce" 
                          />       
                break;    

               
            }

         return series                
    }

    setMinMaxDate() {
          let {data}  = this.props;
          let dates   = data.map(d => d.date);
          let maxDate = new Date()
          let minDate = new Date(Math.min.apply(null,dates));
          maxDate.setDate( maxDate.getDate() + 2 )
      
          this.setState({
                minDate : minDate,
                maxDate:  maxDate
          })
    }


    render() {
      
       let { type, width, data, ratio, seriesType } = this.props;
       let series = this.getSeries();
                 
       return (
        	<ChartCanvas 
					ratio={ratio} 
					width={width} 
					height={this.props.height} 
					margin={{ left: 5, right: 100, top: 0, bottom: 30 }} 
                    seriesName = "forex"
                    type='hybrid'
					data={this.props.data}
					xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}
					xExtents={[this.state.minDate, this.state.maxDate]}
                    padding = {5}
			  >
                <Chart id={1} yExtents={d => [d.high, d.low]}>
                     <YAxis
                                axisAt="right"
                                orient="right"
                                stroke= "white"
                                tickStroke = "white"
                                ticks={10}
                        />
                        <XAxis axisAt="bottom" orient="bottom"
                                 stroke="white"
                                 tickStroke ="white"
                                 ticks={5}
                        />
                        <MouseCoordinateX
                                 at="bottom"
                                 orient="left"
                                 rectWidth={125}
                                 displayFormat={timeFormat("%y-%m-%dT%H:%M:%S")}
                        />
                        <MouseCoordinateY
                                at="right"				
                                displayFormat={format(".4")} 
                        />
                       {series}
                 </Chart>	
				<CrossHairCursor />
			</ChartCanvas>
        );
    }
}


ForexChart.propTypes = {
	data: React.PropTypes.array.isRequired,
	width: React.PropTypes.number.isRequired,
	ratio: React.PropTypes.number.isRequired,
	type: React.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
    seriesType: React.PropTypes.oneOf(['candlestick', 'bar', 'area']).isRequired

};

ForexChart.defaultProps = {
	type: "hybrid",
    seriesType: 'area'

};

ForexChart = fitWidth(ForexChart);

export default ForexChart;