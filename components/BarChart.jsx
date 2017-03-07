import React, { Component, PropTypes } from 'react';
import dc from 'dc';
import { Base } from './Base';


class BarChart extends Component {
  static propTypes = {
    elasticY: PropTypes.bool,
    centerBar: PropTypes.bool,
    gap: PropTypes.number,
    round: PropTypes.func,
    alwaysUseRounding: PropTypes.bool,
    x: PropTypes.func,
    renderHorizontalGridLines: PropTypes.bool,
    filterPrinter: PropTypes.func,
    ordinalColors: PropTypes.array,
    xAxis: PropTypes.func,
    onRenderlet: PropTypes.func,
    brushOn: PropTypes.bool,
    xAxisLabel: PropTypes.object,
    yAxisLabel: PropTypes.object
  };

  loadChart = (container) => {
    const chart = dc.barChart(container);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('elasticY', 'centerBar', 'gap', 'round',
                         'alwaysUseRounding', 'x', 'renderHorizontalGridLines',
                         'filterPrinter', 'ordinalColors', 'xAxis',
                         'onRenderlet', 'brushOn', 'xAxisLabel', 'yAxisLabel');

    chart.render();
  };

  render() {
    return <div className={this.props.className} ref={ this.loadChart }/>;
  }
}

export default Base(BarChart);
