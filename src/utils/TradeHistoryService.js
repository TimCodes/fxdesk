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
                PNL: '2000',
                openDate: "1/19/2006",
                closeDate: "1/20/2006"
            },  
            {
                pair: "GBPUSD",
                description: "its a trade",
                side: 'BUY',
                result: 'LOSS',
                PNL: '-1000',
                openDate: "2/19/2006",
                closeDate: "2/20/2006"
            },
            {
                pair: "USDJPY",
                description: "yen is super cool",
                side: 'SELL',
                result: 'WIN',
                PNL: '1555.12',
                openDate:  "10/19/2006",
                closeDate: "10/20/2006"
            },  
            {
                pair: "EURAUD",
                description: "why so serious",
                side: 'BUY',
                result: 'LOSS',
                PNL: '-450.00',
                openDate: "11/19/2006",
                closeDate: "11/20/2006"
            },        
        ];

        this.equity = 10000;
    }

    create(trade){
        console.log('--- create trade hisotry --')
        console.log(trade)
        console.log('--- end create trade hisotry --')
        // trade.openDate = String(trade.openDate)
        // trade.closdeDate = String(trade.closeDate)
        
         this.trades.push(trade);
        return 'hi'
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
        let PNL = this.trades
                  .reduce(  (acc, trade) => { 
                    return Number(trade.PNL) + acc;
                  }, 0)
        return PNL;
    }
    
    /// need to find a better way to adjust 
    // intialzie start date for equity instead of magic string
    generateEquityArr(){
      let dates   = this.trades.map(d => new Date(d.openDate));
      let minDate = new Date(Math.min.apply(null,dates));  
    
      let equityArr = this.trades
                        .reduce( (acc, trade, idx, arr) => {   
                        let equityObj = {
                            equity :  Number(trade.PNL) + acc[idx].equity,
                            date   :  trade.closeDate
                        }       
                        acc.push(equityObj);  
                        return acc;
                        }, 
                        [{ equity: this.equity, date: minDate } ]);             
      return equityArr;
    }
     
    formatEquityArr(){
        let formatedArr = this.generateEquityArr()
                            .map(e =>{
                                e.date = new Date(e.date)
                                return e;
                            })
        return formatedArr;                    
    }
   
    getMaxDD(){

        let returns = this.generateEquityArr()
                      .map(e => e.equity)
        
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

       
        return returns[prevMaxIdx] - returns[prevMinIdx];
    }

  

}

export default TradeHistoryService;