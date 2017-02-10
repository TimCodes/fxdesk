import React, {Component} from 'react';

class ChartWrap extends Component {
    render() {
        let styles = this.props.styles ? this.props.styles : {}
        return (
            <div className = "chartWrapper" style ={styles}>
                {this.props.children}
            </div>
        );
    }
}

export default ChartWrap;