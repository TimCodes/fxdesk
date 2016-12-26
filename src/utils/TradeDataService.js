import { scaleTime } from "d3-scale";
import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";



var parseDate = timeParse("%Y-%m-%d");

class TradeDataService {

    getTestData(){
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

export default TradeDataService;