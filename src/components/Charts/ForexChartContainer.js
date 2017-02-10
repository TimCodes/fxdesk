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
        super(props);
        if(intitialDeviceWidth < 700){
            chartHeight = 220;
            this.setState({
                chartType: 'area'
            })
        }else if(intitialDeviceWidth < 800){
            chartHeight = 650;
        }else{
            chartHeight  = 825;
        }
             
        this.dataService    = getServiceContainer().data;
        this.pairClick      = this.pairClick.bind(this);
        this.timeFrameClick = this.timeFrameClick.bind(this);
        this.chartTypeClick = this.chartTypeClick.bind(this);

        this.state = {
            data : [],
            pair : {
                text: "EURUSD",
                value: "EUR_USD"
            } ,
            timeFrame: "15m",
            chartType: "bar",
            loading: false,
            containerDimensions: null,
            pairs: this.dataService.getAvailablePairs(),
            chartStyle: {
               
                padding: '15px'
            },
            chartHeight: chartHeight
        }
    }
 

    componentWillMount(){
        let state = {};

        if(this.props.height){
            state.chartHeight = this.props.height
        }

        if(intitialDeviceWidth < 700){
          state.chartType = 'area';
        }

      
        if(this.props.pair){
            let pair = this.dataService.convertPairString(this.props.pair)
            state.pair = {
                    text: this.props.pair,
                    value: pair
                } 

        }

        this.setState(state, this.setData)
        
        
    }

    
    pairClick(pair){
        var formatedPair = this.dataService.convertPairString(pair);
        this.setState({pair : { text: pair, value: formatedPair } }, this.setData);
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
                this.dataService.getDefault15MinBars(this.state.pair.value)
                                .then(setStateData)
                                .catch(handleError)
                 break;
            case '1h':
                this.dataService.getDefaultHourBars(this.state.pair.value)
                                .then(setStateData)
                                .catch(handleError)    
                 break; 
            case '4h':
                 this.dataService.getDefault4HourBars(this.state.pair.value)
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
                            pairs={this.state.pairs}
                            pair={this.state.pair.text}
                          />
                         <Loader size="massive" active inverted />
                      </ChartWrap>;

        }else if(this.state.data.length > 0 ){

            view =   <ChartWrap styles = {this.state.chartStyle} >
                         <ChartControlContainer
                            clickHandlers={ { pair : this.pairClick, timeFrame: this.timeFrameClick, chartType: this.chartTypeClick }}
                            pairs={this.state.pairs}
                          />
                         <ForexChart                    
                                height={this.state.chartHeight} 
                                data={data} 
                                seriesType={this.state.chartType}                      
                         />		
                      </ChartWrap>;

        } else{
             view= <ChartWrap styles={this.state.chartWrapperStyle}><Loader size="massive" active inverted /> </ChartWrap>;;
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

