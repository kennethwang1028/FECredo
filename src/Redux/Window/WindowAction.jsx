import {
  countWindowHeight,
  countWindowWidth,
  countSideBarWidth,
  countInfoWidth,
  isSideBarClicked,
} from './WindowType';

export const SetCountWindowHeight = (height = 0) => ({
  type: countWindowHeight,
  payload: height,
});

export const SetCountWindowWidth = (width = 0) => ({
  type: countWindowWidth,
  payload: width,
});

export const SetCountSideBarWidth = (width = 0) => ({
  type: countSideBarWidth,
  payload: width,
});

export const SetCountInfoWidth = (width = 0) => ({
  type: countInfoWidth,
  payload: width,
});

export const SetIsSideBarClicked = () => ({
  type: isSideBarClicked,
});
