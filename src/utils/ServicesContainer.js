
import TradeTrackerService from './TradeTrackerService';
import TradeHistoryService from './TradeHistoryService';
import TradeDataService    from './TradeDataService';

let serviceContainer = {};


export function init(){

    serviceContainer.tracker = new TradeTrackerService();
    serviceContainer.history = new TradeHistoryService();
    serviceContainer.data    = new TradeDataService();
}


export function getServiceContainer(){
    return serviceContainer;
}   