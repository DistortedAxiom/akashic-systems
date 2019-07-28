import React from 'react';
import Plot from 'react-plotly.js';
import { PassThrough } from 'stream';

export default class Plotly2 extends React.Component {

  constructor(props) {
    super(props);

    this.updateData = this.updateData.bind(this);
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    const csv_url = "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv";
    var Papa = require('papaparse')


    Papa.parse(csv_url, {
      dynamicTyping: true,
      download: true,
      comments: "*=",
      header: true,
      complete: this.updateData,
    });
  }

  updateData(result) {
    const data =  result.data
    this.setState({data: data})
  }


  render() {

    const filler = this.state.data
    console.log(filler);

    var trace1 = {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23],
      name: 'SF Zoo',
      type: 'bar'
    };
    
    var trace2 = {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [12, 18, 29],
      name: 'LA Zoo',
      type: 'bar'
    };
    
    var data = [trace1, trace2];
    
    var layout = {barmode: 'group'};

    return (

      <Plot
        data = {data}
        layout = {layout}
      />

    );
  }
}