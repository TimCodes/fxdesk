import React, {Component} from 'react';
import Measure from 'react-measure'
import {  Loader } from 'semantic-ui-react'


import {getServiceContainer} from '../../utils/ServicesContainer';
import ForexChart from './ForexChart';
import ChartControlContainer from './ForexChartControls/ChartControlContainer';
import ChartWrap from './ChartWrapper';
import {intitialDeviceWidth,  intitialDeviceHeight} from '../../utils/AppSettings'

class ForexChartContainer extends Component {
    constructor(props) {
        let chartHeight = 0;
        if(intitialDeviceWidth < 700){
            chartHeight = 220;
        }else if(intitialDeviceWidth < 800){
            chartHeight = 650;
        }else{
            chartHeight  = 825;
        }
        super(props);
        this.state = {
            data : [],
            pair : "EUR_USD", 
            timeFrame: "15m",
            chartType: "area",
            loading: false,
            containerDimensions: null,
            chartStyle: {
               
                padding: '15px'
            },
            chartHeight: chartHeight
        }
        this.dataService    = getServiceContainer().data;
        this.pairClick      = this.pairClick.bind(this);
        this.timeFrameClick = this.timeFrameClick.bind(this);
        this.chartTypeClick = this.chartTypeClick.bind(this);
    }
 

    componentWillMount(){
        setTimeout(function (params) {
            console.log(intitialDeviceWidth, "width")
            console.log(intitialDeviceHeight)
        }, 200)
        let pair = this.state.pair
        if(this.props.pair){
            pair = this.props.pair;
            this.setState({
                pair: this.props.pair
            })
        }
        return  this.dataService.getDefault15MinBars(pair)
            .then(chartData => {
                this.setState({
                    data : chartData
            })
            }).catch(e => console.log(e))
    }

    pairClick(pair){
        this.setState({pair : pair}, this.setData)
           
    }

    timeFrameClick(timeFrame){
        this.setState(
            {
                timeFrame: timeFrame
            },  this.setData
        )
    }
    
    chartTypeClick(type){
        this.setState({chartType: type})
    }

    setData(){
        this.toggleLoader()
        let setStateData = d => this.setState( { data : d,  loading: false})

        switch(this.state.timeFrame){
            case '15m':
                this.dataService.getDefault15MinBars(this.state.pair)
                                .then(setStateData)
                                .catch(handleError)
                 break;
            case '1h':
                this.dataService.getDefaultHourBars(this.state.pair)
                                .then(setStateData)
                                .catch(handleError)    
                 break; 
            case '4h':
                 this.dataService.getDefault4HourBars(this.state.pair)
                                 .then(setStateData)
                                 .catch(handleError)           
                 break;           

        }

        function handleError(err){
            console.log(err)
        }
    }

   
   

    toggleLoader(){
        this.setState({
            loading: !this.state.loading
        })
    }

    render() {
    
        let view;
        let {data, loading} = this.state;
        
        if(loading){

            view =   <ChartWrap>
                         <ChartControlContainer
                            clickHandlers={ { pair : this.pairClick, timeFrame: this.timeFrameClick, chartType: this.chartTypeClick }}
                          />
                         <Loader size="massive" active inverted />
                      </ChartWrap>;

        }else if(this.state.data.length > 0 ){

            view =   <ChartWrap styles = {this.state.chartStyle} >
                         <ChartControlContainer
                            clickHandlers={ { pair : this.pairClick, timeFrame: this.timeFrameClick, chartType: this.chartTypeClick }}
                          />
                         <ForexChart
                            
                                height={this.state.chartHeight} 
                                data={data} 
                                seriesType={this.state.chartType}                      
                         />		
                      </ChartWrap>;

        } else{
             view=<ChartWrap styles={this.state.chartWrapperStyle}><Loader size="massive" active inverted /> </ChartWrap>;;
        }

        return (
            <Measure
                onMeasure={dimensions =>  this.setState({ containerDimensions : dimensions})}
            >
            {view}
           </Measure>      
        )
        
        
         
   
    }
}

export default ForexChartContainer;

