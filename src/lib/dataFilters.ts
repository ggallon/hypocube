import { ChartState, Point } from '../types';

const isAnyInView = (points: Point[], state: ChartState): boolean => {
  return !!points.find(([x, y]) => {
    const pxX = state.scaleX(x);
    const pxY = state.scaleY(y);
    const { pxBox } = state;
    return (
      pxX >= pxBox.xMin &&
      pxX <= pxBox.xMax &&
      pxY >= pxBox.yMin &&
      pxY <= pxBox.yMax
    );
  });
};

// TODO: need different type of filter for Bar (range?) that only works on one axis
export const filterToView = (data: Point[], state: ChartState) => {
  return data.filter((_, i) => {
    if (i === 0) {
      return isAnyInView(data.slice(0, 2), state);
    }
    return isAnyInView(data.slice(i - 1, i + 2), state);
  });
};

export const trimToView = (data: Point[], state: ChartState): Point[] => {
  const startRemoved = isAnyInView(data.slice(0, 2), state)
    ? data
    : data.slice(1);
  const endRemoved = isAnyInView(startRemoved.slice(data.length - 2), state)
    ? startRemoved
    : startRemoved.slice(0, startRemoved.length - 1);

  return endRemoved.length < data.length ? trimToView(endRemoved, state) : data;
};
