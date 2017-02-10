
class TradeTrackerService {

    constructor(){
        this.trades = [
            {
                pair: "EURUSD",
                status: "OPEN",
                setupType: "6x6",
                description: "its a trade",
                side: 'BUY'
            },
            {
                pair: "GBPUSD",
                status: "TRACKING",
                setupType: "6x6",
                description: "its a trade",
                side: 'SELL'
            },
            {
                pair: "NZDJPY",
                status: "TRACKING",
                setupType: "6x6",
                description: "its a trade",
                side: 'BUY'
            },
            {
                pair: "EURAUD",
                status: "OPEN",
                setupType: "6x6",
                description: "its a trade",
                side: 'SELL'
            },
            {
                pair: "USDJPY",
                status: "TRACKING",
                setupType: "6x6",
                description: "its a trade",
                side: 'BUY'
            }
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


}

export default TradeTrackerService;

