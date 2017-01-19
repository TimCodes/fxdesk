import React, {Component} from 'react';
import Measure from 'react-measure'
import {  Loader } from 'semantic-ui-react'


import TradeDataService from '../../utils/TradeDataService';
import {getServiceContainer} from '../../utils/ServicesContainer';
import ForexChart from './ForexChart';
import ChartControlContainer from './ForexChartControls/ChartControlContainer';

class ForexChartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            pair : "EUR_USD", 
            timeFrame: "15m",
            chartType: "bar",
            loading: false
        }
        this.dataService    = getServiceContainer().data;
        this.pairClick      = this.pairClick.bind(this);
        this.timeFrameClick = this.timeFrameClick.bind(this);
        this.chartTypeClick = this.chartTypeClick.bind(this);
    }

    componentWillMount(){
        return  this.dataService.getDefault15MinBars('EUR_USD')
            .then(chartData => {
                console.log(this.data)
                this.setState({
                    data : chartData
            })
            }).catch(e => console.log(e))
    }

    pairClick(pair){
        this.setState({pair : pair}, this.setData())
           
    }

    timeFrameClick(timeFrame){
        console.log(timeFrame)
        this.setState(
            {
                timeFrame: timeFrame
            },  this.setData()
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

            view =   <div className="chartWrapper">
                         <ChartControlContainer
                            clickHandlers = { { pair : this.pairClick, timeFrame: this.timeFrameClick, chartType: this.chartTypeClick }}
                          />
                         <Loader size = "massive" active inverted />
                      </div>;

        }else if(this.state.data.length > 0 ){

            view =   <div className="chartWrapper"> 
                         <ChartControlContainer
                            clickHandlers = { { pair : this.pairClick, timeFrame: this.timeFrameClick, chartType: this.chartTypeClick }}
                          />
                         <ForexChart
                                width={this.state.containerDimensions.width} 
                                height={this.state.containerDimensions.height - 60} 
                                data={data} 
                                seriesType = {this.state.chartType}                      
                         />		
                     </div>

        } else{
             view =   <div className="chartWrapper"> <Loader size = "massive" active inverted /></div>;
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

