import axios from 'axios';

import {
  userType,
  isUserEmailVailed,
  isUserPasswordVailed,
  userInfo,
  isLoadUserInfo,
  userFeverList,
} from './UserType';

export const SetUserType = (type = 'user') => ({
  type: userType,
  payload: type,
});

export const IsUserEmailVailed = (bool) => ({
  type: isUserEmailVailed,
  payload: bool,
});

export const IsUserPasswordVailed = (bool) => ({
  type: isUserPasswordVailed,
  payload: bool,
});

export const SetUserInfo = (user = {}) => ({
  type: userInfo,
  payload: user,
});

export const IsLoadUserInfo = (bool) => ({
  type: isLoadUserInfo,
  payload: bool,
});

export const SetUserFeverList = (list = []) => ({
  type: userFeverList,
  payload: list,
});

export const FetchIsUserEmailVailed = ({
  dispatch = () => {},
  email = '',
}) => {
  axios(`http://localhost:3001/SDCredo/fecuseremail/${email}`)
    .then((res) => {
      if (res.data.length !== 0) {
        dispatch(IsUserEmailVailed(true));
      } else {
        dispatch(IsUserEmailVailed(false));
      }
    })
    .catch((err) => console.log(err));
};

export const FetchUser = ({
  dispatch = () => {},
  email = '',
  password = '',
}) => {
  axios(`http://localhost:3001/SDCredo/fecuser/${email}/${[password]}`)
    .then((res) => {
      if (res.data.length !== 0) {
        dispatch(IsUserPasswordVailed(true));
        dispatch(SetUserInfo(res.data[0]));
        dispatch(IsLoadUserInfo(true));
      } else {
        dispatch(IsUserPasswordVailed(false));
      }
    })
    .catch((err) => console.log(err));
};

export const FetchUserFever = ({
  dispatch = () => {},
  userid = '',
}) => {
  axios(`http://localhost:3001/SDCredo/fecuserfever/${userid}`)
    .then((res) => {
      console.log(res);
      dispatch(SetUserFeverList(res));
    })
    .catch((err) => console.log(err));
};

export const FetchUpdateUserInfo = ({
  dispatch = () => {},
  userid = 1,
  title = '',
  value = '',
}) => {
  const option = title.toLowerCase().replace(' ', '_');
  axios.put(`http://localhost:3001/SDCredo/fecuser/update/${userid}/${option}/${value}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const PostUser = ({
  dispatch = () => {},
  user = {},
}) => {
  fetch('http://localhost:3001/SDCredo/fecuser', {
    method: 'POST',
    body: user,
  })
    .then((res) => res.json())
    .then((res) => console.log(res, 'asd'))
    .catch((err) => console.log(err));
};
