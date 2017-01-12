class OandaDataService{
  constructor(accountId, authToken){
    this.baseCandleUrl = `https://api-fxpractice.oanda.com/v1/candles?`
    this.accountId     = accountId;
    this.token         = authToken;
  }
  
  getOHLCData(pair, start, end, timeFrame){
    let URL =  this.baseCandleUrl + `instrument=${pair}&start=${escape(start)}&end=${escape(end)}&granularity=${timeFrame}`;
    let headers = { "Authorization": "Bearer ${this.token}" }
    return axios.get(URL, {headers: headers})
  }
  
  getDefaultHourBars(pair){
    return this.getRecentBars('H1', pair)
  }
  
  getDefault4HourBars(pair){
    return this.getRecentBars('H4', pair)
  }
  
   getDefault15MinBars(pair){
    return this.getRecentBars('M15', pair)
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
        start.setDate( start.getDate() - (multiplier * 200) )
      }else if(/H/.test(timeFrame)){
        let multiplier = Number(timeFrame.replace('H', ''))
        start.setHours( start.getHours() - (multiplier * 200) )
      }else if(/M/.test(timeFrame)){
        let multiplier = Number(timeFrame.replace('M', ''))
        start.setMinutes( start.getMinutes() - (multiplier * 200) )
        console.log(start)
      }
        
      return start; 
    }
  
  }
  
}

export default OandaDataService;
const fxData = new OandaDataService('1560075',"f2a541bd658a95920c624f73f5d9c656-59fb5d06d799d59d054a395bbf336977");

fxData.getOHLCData("EUR_USD", "2017-01-07T06:42:14-07:00", "2017-01-10T06:42:14-07:00", 'H1' )
.then(data => consol.log)
.catch(err => console.log)

fxData.getRecentBars('H1', 'EUR_USD' )
.then(d => console.log(d.data))

fxData.getDefault4HourBars('GBP_USD' )
.then(d => console.log(d.data))
.catch(console.log)