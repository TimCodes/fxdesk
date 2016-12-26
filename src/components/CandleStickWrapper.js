import React from 'react';

import CandleStickChart from './candlestick';
import TradeDataService from '../utils/TradeDataService';

class CandleStickWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }
    componentWillMount(){
        return  TradeDataService.getTestData()
            .then(chartData => {
                console.log(this.data)
                this.setState({
                    data : chartData
                }).bind(this)
            }).catch(e => console.log(e))
    }

    render(){
        console.log(this.state)
        let view = <div> </div>;

        if(this.state.data.lenght > 0 ){
            view = <CandleStickChart data={this.state.data} type={'hybrid'} />
        } 
        return(
           view
        )
    }
};

export default CandleStickWrapper;
