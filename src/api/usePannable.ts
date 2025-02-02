import { easeCubicOut } from 'd3-ease';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Viewbox, { createViewbox, ViewboxDuck } from './Viewbox';
import { ChartGestureEvent, GestureIntent, GesturePhase } from '../types';
import useTransition from './useTransition';
import { ChartAnimation } from '../types';

export type InterpretGesture = (
  current: Viewbox,
  data: ChartGestureEvent
) => Viewbox | ChartAnimation<Viewbox>;

interface Options {
  animationDuration: number;
  animationStepFunction: (progress: number) => number;
  rescale: (view: Viewbox, event?: ChartGestureEvent) => ViewboxDuck;
}

const defaultOptions: Options = {
  animationDuration: 600,
  animationStepFunction: easeCubicOut,
  rescale: (v: Viewbox) => v,
};

const makeAnimation = (current: Viewbox, next: Viewbox, options: Options) => {
  const { animationDuration, animationStepFunction } = options;
  return {
    duration: animationDuration,
    step: (progress: number) =>
      current.interpolate(next, animationStepFunction(progress)),
  };
};

export default (
  initialViewbox: ViewboxDuck,
  options: Partial<Options> = {}
) => {
  const _initialViewbox = createViewbox(initialViewbox);
  const _options: Options = useMemo(
    () => ({
      ...defaultOptions,
      ...options,
    }),
    [options]
  );

  const [state, dispatch, isAnimating] = useTransition<Viewbox>(
    _initialViewbox
  );
  const [isGesturing, setIsGesturing] = useState(false);

  const onGesture = useCallback(
    (event: ChartGestureEvent) => {
      if (event.phase === GesturePhase.Start) {
        setIsGesturing(true);
      } else if (event.phase === GesturePhase.End) {
        setIsGesturing(false);
      }

      const next = createViewbox(_options.rescale(event.transform(state)));

      if (event.intent === GestureIntent.Swipe) {
        dispatch(makeAnimation(state, next, _options));
      } else {
        dispatch(next);
      }
    },
    [state, dispatch, _options]
  );

  const scrollToView = useCallback(
    (view: ViewboxDuck) => {
      const _v = createViewbox(view);
      const next = createViewbox(_options.rescale(_v));
      dispatch(makeAnimation(state, next, _options));
    },
    [state, dispatch, _options]
  );

  // run rescale ONE TIME at mount:
  useEffect(() => {
    const next = createViewbox(_options.rescale(state));
    dispatch(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    view: state,
    setView: dispatch,
    scrollToView,
    onGesture,
    isPanning: isGesturing || isAnimating,
  };
};
