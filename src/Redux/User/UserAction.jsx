import axios from 'axios';

import {
  userType,
  isUserEmailVailed,
  isUserPasswordVailed,
  userInfo,
  isLoadUserInfo,
  userFeverList,
  isUserEmailExited,
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

export const IsUserEmailExited = (bool) =>({
  type: isUserEmailExited,
  payload: bool,
});

export const FetchIsUserEmailVailed = ({
  dispatch = () => {},
  email = '',
  type = '',
}) => {
  axios(`http://localhost:3001/SDCredo/fec${type}email/${email}`)
    .then((res) => {
      console.log(res)
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
  type = '',
}) => {
  axios(`http://localhost:3001/SDCredo/fec${type}/${email}/${[password]}`)
    .then((res) => {
      console.log(res,'sd');
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
  type = 'user',
}) => {
  axios(`http://localhost:3001/SDCredo/fec${type}fever/${userid}`)
    .then((res) => {
      dispatch(SetUserFeverList(res.data));
    })
    .catch((err) => console.log(err));
};

export const FetchUpdateUserInfo = ({
  dispatch = () => {},
  userid = 1,
  title = '',
  value = '',
  type = 'user',
}) => {
  const option = title.toLowerCase().replace(' ', '_');
  axios.put(`http://localhost:3001/SDCredo/fec${type}/update/${userid}/${option}/${value}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const PostUser = ({
  dispatch = () => {},
  user = {},
  type = 'user',
}) => {
  const { email } = user;
  const emailCheckURL = `http://localhost:3001/SDCredo/fec${type}email/${email}`;
  const PostUserURL = `http://localhost:3001/SDCredo/fec${type}`;

  axios(emailCheckURL)
    .then((res) => {
      if (res.data.length === 0) {
        dispatch(IsUserEmailExited(false));
        axios.post(PostUserURL, {
          user,
        })
          .then((data) => {
            dispatch(IsUserEmailVailed(true));
            dispatch(IsUserPasswordVailed(true));
            dispatch(SetUserInfo(data.data));
            dispatch(IsLoadUserInfo(true));
          })
          .catch((err) => console.log(err));
      } else {
        dispatch(IsUserEmailExited(true));
      }
    })
    .catch((err) => console.log(err));
};
