import React from 'react';
import Plot from 'react-plotly.js';
import { PassThrough } from 'stream';

export default class Plotly2 extends React.Component {

  constructor(props) {
    super(props);

    this.updateData = this.updateData.bind(this);
    this.state = {
      data: {},
      x_array : [],
      y_array : []
    }
  }

  componentDidMount() {
    const csv_url = "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv";
    var Papa = require('papaparse')


    Papa.parse(csv_url, {
      dynamicTyping: true,
      download: true,
      header: true,
      comments: "*=",
      complete: this.updateData,
    });
  }

  updateData(result) {
    const data =  result.data;
    var x_array = [];
    var y_array = [];
    for (var i = 0; i < data.length; i++) {
      x_array.push(data[i]["Date"]);
      y_array.push(data[i]["AAPL.High"]);
    }
    this.setState({data: data});
    this.setState({x_array: x_array});
    this.setState({y_array: y_array});
  }


  render() {

    let main_data = this.state.data;
    console.log(this.state.x_array);
    console.log(this.state.y_array);


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