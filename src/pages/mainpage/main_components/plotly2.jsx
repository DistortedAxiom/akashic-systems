import React from 'react';
import Plot from 'react-plotly.js';

export default class Plotly2 extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{width: 800, height: 650, title: 'Plot_2'}}
      />
    );
  }
}