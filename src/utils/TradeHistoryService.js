import { scaleTime } from "d3-scale";
import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";


var parseDate = timeParse("%Y-%m-%d");

class TradeHistoryService {

    constructor(){
        this.trades = [
            {
                pair: "EURUSD",
                description: "its a trade",
                side: 'BUY',
                result: 'WIN',
                PNL: '2.44',
                openDate: "12/19/2006",
                closeDate: "12/20/2006"
            },  
            {
                pair: "GBPUSD",
                description: "its a trade",
                side: 'BUY',
                result: 'LOSS',
                PNL: '-1.44',
                openDate: "12/19/2006",
                closeDate: "12/20/2006"
            },
            {
                pair: "USDJPY",
                description: "yen is super cool",
                side: 'SELL',
                result: 'WIN',
                PNL: '55.12',
                openDate:  "12/19/2006",
                closeDate: "12/20/2006"
            },  
            {
                pair: "EURAUD",
                description: "why so serious",
                side: 'BUY',
                result: 'LOSS',
                PNL: '-5.00',
                openDate: "11/19/2006",
                closeDate: "11/20/2006"
            },        
        ];
    }

    create(trade){
        this.trades.push(trade);
    };

    update(tradeIdx, updatedTrade){
        this.trades[tradeIdx] = updatedTrade;
    };

    delete(idx){
        delete this.trades[idx];
    };

    getTrades(){
        return this.trades;
    }
    
    getLossCount(){
        let lossCount = this.trades
                        .filter(t => t.result == "LOSS")
        return lossCount.length;                
    }

    getWinCount(){
        let winCount = this.trades
                       .filter(t => t.result == "WIN")                 
        return winCount.length;                
    }

    getPNL(){
        let PNL = this.trades.reduce(  (acc, trade) => { 
            
             return Number(trade.PNL) + acc
        }, 0)
        return PNL;
    }
  
    // need to append pnl to returns to get actuall return values
    // right now this is broken
    getMaxDD(){
        let returns = this.trades.map( trade => Number(trade.PNL) );
        let maxIdx = 0; 
        let prevMaxIdx = 0; 
        let prevMinIdx  = 0;
        
        returns.forEach(( r, idx , arr)  => {

            if (r >= arr[maxIdx]){
                maxIdx = idx;
            }else if( ( arr[maxIdx ] - arr[idx] ) > ( arr[prevMaxIdx] - arr[prevMinIdx] )  ){
                prevMaxIdx = maxIdx;
                prevMinIdx = idx;
            }
        })

        console.log(prevMaxIdx, prevMinIdx, maxIdx)
        return returns[prevMaxIdx] - returns[prevMinIdx];
    }

    getEquityTestdata(){
         return fetch("http://rrag.github.io/react-stockcharts/data/MSFT.tsv")
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
    }


}

export default TradeHistoryService;