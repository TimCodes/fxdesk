import React from 'react';

import CandleStickChart from './candlestick';
import TradeDataService from '../utils/TradeDataService';

class CandleStickWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
        this.dataService = new TradeDataService();
    }
    componentWillMount(){
        this.dataService.getDefaultHourBars('EUR_USD')
        .then(console.log)
        return  this.dataService.getDefault15MinBars('EUR_USD')
            .then(chartData => {
                console.log(this.data)
                this.setState({
                    data : chartData
            })
            }).catch(e => console.log(e))
    }

    render(){
        console.log(this.state)
        let view = <div> </div>;

        if(this.state.data.length > 0 ){
            view = <CandleStickChart data={this.state.data} type={'hybrid'} />
        } 
        return(
           view
        )
    }
};

export default CandleStickWrapper;
