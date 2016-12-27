
class TradeTrackerService {

    constructor(){
        this.trades = [];
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


}

export default TradeTrackerService;