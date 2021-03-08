import React from 'react';
import {
  BarVerticalSeries,
  Chart,
  Handle,
  Line,
  LineSeries,
  ScatterSeries,
  XAxis,
  YAxis,
} from '../src';
import { tickerTape } from './__data__/tickerTape';
import { bc as bcVaccinations } from './__data__/vaccinations';

interface Example {
  name: string;
  render: ({ isCanvas }: { isCanvas: boolean }) => JSX.Element;
}

// const SimpleTooltip: React.FC = () => (
//   <div
//     style={{
//       background: 'white',
//       border: '1px solid black',
//       boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, 0.2)',
//     }}
//   >
//     <strong>Hello, world!</strong>
//   </div>
// );

const examples: Example[] = [
  {
    name: 'Line',
    render: ({ isCanvas }) => (
      <Chart
        height={300}
        view={{ x: [-10, 100], y: [-10, 100] }}
        isCanvas={isCanvas}
      >
        <Line
          path={[
            [0, 0],
            [25, 75],
            [50, 0],
          ]}
        />
      </Chart>
    ),
  },
  {
    name: 'Filled line',
    render: ({ isCanvas }) => (
      <Chart
        height={300}
        view={{ x: [-10, 100], y: [-10, 100] }}
        isCanvas={isCanvas}
      >
        <Line
          path={[
            [0, 0],
            [25, 75],
            [50, 0],
          ]}
          fill="#000"
        />
      </Chart>
    ),
  },
  {
    name: 'Click handler',
    render: ({ isCanvas }) => (
      <Chart
        height={300}
        view={{ x: [-10, 100], y: [-10, 100] }}
        isCanvas={isCanvas}
      >
        <Handle onClick={console.log} elementPosition={[0, 0]}>
          <Line
            path={[
              [0, 0],
              [25, 75],
              [50, 0],
            ]}
            fill="#000"
          />
        </Handle>
      </Chart>
    ),
  },
  {
    name: 'Scatter plot',
    render: ({ isCanvas }) => (
      <Chart
        height={300}
        view={{ x: [0, 1], y: [0, 2.5] }}
        gutter={[10, 10, 30, 50]}
        isCanvas={isCanvas}
        // tooltip={<SimpleTooltip />}
        // tooltipPosition={[10, 50]}
      >
        <XAxis range={[0, 1]} tickPositions={[0, 0.5, 1]} />
        <YAxis range={[0, 2.5]} tickPositions={[0, 0.5, 1, 1.5, 2, 2.5]} />
        <ScatterSeries data={tickerTape} color="#5477a1" />
        <LineSeries
          data={tickerTape}
          color="#5477a1"
          overrideStyles={{ dataLineCurveType: 'natural' }}
        />
      </Chart>
    ),
  },
  {
    name: 'B.C. COVID-19 Vaccinations - Bar',
    render: ({ isCanvas }) => (
      <Chart
        height={300}
        view={{ x: [0, 6], y: [0, 9000] }}
        gutter={[20, 20, 50, 50]}
        isCanvas={isCanvas}
      >
        <XAxis
          range={[0, 6]}
          tickPositions={[1, 2, 3, 4, 5, 6]}
          getTickLabel={(x) => bcVaccinations[x - 1][0]}
        />
        <YAxis range={[0, 9000]} tickPositions={[0, 3000, 6000, 9000]} />
        <BarVerticalSeries
          data={bcVaccinations.map((point, i) => [i + 1, point[1]])}
          color="rgb(177, 0, 0)"
        />
      </Chart>
    ),
  },
];

export default examples;
