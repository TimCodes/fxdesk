import { scaleTime } from "d3-scale";
import { tsvParse } from  "d3-dsv";
import { timeParse, isoParse, utcParse } from "d3-time-format";
import  axios  from 'axios';



var parseDate = timeParse("%Y-%m-%d");
var candleDateParse = timeParse("%Y-%m-%dT%H:%M:%S.%LZ")
class TradeDataService {

	constructor(accountId, authToken){
    this.baseCandleUrl  = `https://api-fxpractice.oanda.com/v1/candles?`
    this.accountId      = accountId;
    this.token          = authToken;
    this.availablePairs = [
      "EURUSD",
      "GBPUSD",
      "AUDUSD",
      "NZDUSD",
      "USDJPY",
      "USDCAD",
      "USDCHF"
    ]
  }

  getAvailablePairs(){
    return this.availablePairs;
  }
  
  getOHLCData(pair, start, end, timeFrame){
    let URL =  this.baseCandleUrl + `instrument=${pair}&start=${escape(start)}&end=${escape(end)}&granularity=${timeFrame}`;
    let headers = { "Authorization": "Bearer ${this.token}" }
    return axios.get(URL, {headers: headers})
			.then(res => res.data.candles)
			.then( candles => {
			 let formated = candles.map(candle =>{		   		
				 	let newCandle = {
						 date  : new Date(candle.time) , 
						 open  : +candle.openAsk,
						 high  : +candle.highAsk,
						 low   : +candle.lowAsk,
						 close : +candle.closeAsk
					 }
					 return newCandle;
				})
			  return formated;	
			})
  }
  
  getDefaultHourBars(pair){
    return this.getRecentBars('H1', pair)
  }
  
  getDefault4HourBars(pair){
    return this.getRecentBars('H4', pair)
  }
  
   getDefault15MinBars(pair){
     console.log("--- get data ---", pair)
    return this.getRecentBars('M15', pair)
  }

  //converts pair string to Oanda format
  // eg. "EURUSD" becomes "EUR_USD"
  convertPairString(pair){
    let pairArr = pair.split("");
    pairArr.splice(3,0, "_")
    return pairArr.join("");
  }
  
  getRecentBars(timeFrame, pair){
    let start = calcEndDate(timeFrame)
    let end   = new Date()
     
    start = start.toISOString();
    end   = end.toISOString()
   
    return this.getOHLCData(pair, start, end, timeFrame);
    
    function calcEndDate(timeFrame){
      let start = new Date()
      
      if(/D/.test(timeFrame)){
        let multiplier = timeFrame.replace('D', '') 
        start.setDate( start.getDate() - (multiplier * 500) )
      }else if(/H/.test(timeFrame)){
        let multiplier = Number(timeFrame.replace('H', ''))
        start.setHours( start.getHours() - (multiplier * 500) )
      }else if(/M/.test(timeFrame)){
        let multiplier = Number(timeFrame.replace('M', ''))
        start.setMinutes( start.getMinutes() - (multiplier * 500) )
        console.log(start)
      }
        
      return start; 
    }
  
  }
   
    
}

export default TradeDataService;