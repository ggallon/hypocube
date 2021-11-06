import React from 'react';
import {
  Chart,
  XAxis,
  LineSeries,
  ChartStyleOptions,
  YAxis,
  usePannable,
  findExtremes,
} from '../src';

interface Props {
  getDateLabel: (x: number) => string;
  isCanvas: boolean;
  series: Array<[number, number]>;
  tickPositions: number[];
}

const bounds: [number, number, number, number] = [0, 0, 400, 1000];

const seriesStyle: ChartStyleOptions = {
  dataLineStroke: '#5477a1',
  dataPointStroke: '#5477a1',
  dataPointFill: '#5477a1',
};

const Pannable: React.FC<Props> = ({
  getDateLabel,
  isCanvas,
  series,
  tickPositions,
}) => {
  const { view, onGesture } = usePannable([50, 0, 50, 1000], {
    rescale: (view) => {
      const bounded = view.bound(bounds);
      return bounded.setEdges({
        yMax: findExtremes(bounded.pointsWithinX(series)).yMax + 20,
        yMin: 0,
      });
    },
  });

  return (
    <Chart
      height={300}
      view={view}
      gutter={[20, 20, 50, 50]}
      isCanvas={isCanvas}
      onGesture={onGesture}
    >
      <XAxis
        range={view.x}
        tickPositions={tickPositions}
        getTickLabel={getDateLabel}
        axisLabel="Date"
        intercept={view.yMin}
      />
      <YAxis
        tickPositions={[100, 200, 300, 400, 500, 600, 700, 800, 900]}
        getTickLabel={() => ''}
        intercept={view.xMin}
      />
      <LineSeries data={series} chartStyle={seriesStyle} />
    </Chart>
  );
};

export default Pannable;
