import {
  windowHeight,
  windowWidth,
} from './WindowType';

export const windowHeightSet = (height = 0) => ({
  type: windowHeight,
  payload: height,
});

export const windowWidthSet = (width = 0) => ({
  type: windowWidth,
  payload: width,
});
