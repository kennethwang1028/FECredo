import {
  userName,
  userEmail,
  userPassword,
  userCity,
} from './UserType';

export const userNameEnter = (text = '') => ({
  type: userName,
  payload: text,
});

export const userEmailEnter = (text = '') => ({
  type: userEmail,
  payload: text,
});

export const userPasswordEnter = (text = '') => ({
  type: userPassword,
  payload: text,
});

export const userCityEnter = (text = '') => ({
  type: userCity,
  payload: text,
});
