
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
                result: 'WIN',
                PNL: '-1.44',
                openDate: "12/19/2006",
                closeDate: "12/20/2006"
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


}

export default TradeHistoryService;