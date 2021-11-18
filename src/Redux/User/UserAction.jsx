import axios from 'axios';

import {
  userType,
  isUserEmailVailed,
  isUserPasswordVailed,
  userInfo,
  isLoadUserInfo,
  userFeverList,
  isUserEmailExited,
  userFriendsList,
  userOrderList,
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

export const SetUserOrderList = (list = []) => ({
  type: userOrderList,
  payload: list,
});

export const SetUserFriendsList = (list = []) => ({
  type: userFriendsList,
  payload: list,
});

export const IsUserEmailExited = (bool) => ({
  type: isUserEmailExited,
  payload: bool,
});

export const LoadIsUserEmailVailed = ({
  dispatch = () => {},
  email = '',
  type = '',
}) => {
  axios(`http://localhost:3001/SDCredo/fec${type}email/${email}`)
    .then((res) => {
      if (res.data.length !== 0) {
        dispatch(IsUserEmailVailed(true));
      } else {
        dispatch(IsUserEmailVailed(false));
      }
    })
    .catch((err) => console.log(err));
};

export const LoadUser = ({
  dispatch = () => {},
  email = '',
  password = '',
  type = '',
}) => {
  axios(`http://localhost:3001/SDCredo/fec${type}/${email}/${[password]}`)
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

export const LoadUserFever = ({
  dispatch = () => {},
  userid = '',
}) => {
  axios(`http://localhost:3001/SDCredo/fecuserfever/${userid}`)
    .then((res) => {
      const list = res.data || [];
      dispatch(SetUserFeverList(list));
    })
    .catch((err) => console.log(err));
};

export const LoadUserFriendsList = ({
  dispatch = () => {},
  userid = '',
}) => {
  axios(`http://localhost:3001/SDCredo/fecuserfriendslist/${userid}`)
    .then((res) => {
      const list = res.data || [];
      dispatch(SetUserFriendsList(list));
    })
    .catch((err) => console.log(err));
};

export const DeletedUserFriend = ({
  dispatch = () => {},
  userfriendid = 0,
  friendList = [],
}) => {
  axios.delete(`http://localhost:3001/SDCredo/fecuserfriendslist/delete/${userfriendid}`)
    .then((res) => {
      const list = friendList.filter((i) => i.fec_user_friends_id !== res.data.fec_user_friends_id);
      dispatch(SetUserFriendsList(list));
    })
    .catch((err) => console.log(err));
};

export const PostUserFriend = ({
  dispatch = () => {},
  friendInfo = {},
  friendList = [],
  func = () => {},
}) => {
  axios.post('http://localhost:3001/SDCredo/fecuserfriendslist/add', {
    friendInfo,
  })
    .then((res) => {
      const newFriend = { ...friendInfo };
      newFriend.fec_user_friends_id = res.data.fec_user_friends_id;
      const list = [...friendList, newFriend];
      dispatch(SetUserFriendsList(list));
      const id = newFriend.fec_friends_id;
      const firstName = newFriend.fec_user_first_name;
      const lastName = newFriend.fec_user_last_name;
      const city = newFriend.fec_user_city;
      func(`You and ${id} ${firstName} ${lastName} in ${city} are Friends now`);
    })
    .catch((err) => console.log(err));
};

export const postUserfriendWaitinglist = ({
  dispatch = () => {},
  friendWaitingInfo = {},
  userInformation = {},
  func = () => {},
}) => {
  axios.post('http://localhost:3001/SDCredo/fecuserfriendswaitinglist', {
    friendWaitingInfo,
  })
    .then((res) => {
      const newUser = { ...userInformation };
      const newObj = {
        friendsid: friendWaitingInfo.fec_friends_id,
        friendsinfo: {
          lastname: friendWaitingInfo.fec_user_last_name,
          firstname: friendWaitingInfo.fec_user_first_name,
          city: friendWaitingInfo.fec_user_city,
        },
        isaddingfriends: friendWaitingInfo.fec_is_adding_friends,
        isstillwaitng: friendWaitingInfo.fec_is_still_waiting,
        waitingid: res.data.fec_user_friends_waiting_id,
      };
      let newlist;
      const list = userInformation.waitingtogetresponedlist;
      if (list !== null) {
        newlist = [...list, newObj];
      } else {
        newlist = [newObj];
      }
      newUser.waitingtogetresponedlist = newlist;
      dispatch(SetUserInfo(newUser));
      const {
        lastname,
        firstname,
        city,
      } = newObj.friendsinfo;
      const { friendsid } = newObj;
      func(`Waiting for ${friendsid} ${firstname} ${lastname} in ${city} to be responsed !`);
    })
    .catch((err) => console.log(err));
};

export const DeletedUserfriendWaitinglist = ({
  waitingid = 0,
  dispatch = () => {},
  userinfo = {},
  list = [],
}) => {
  axios.delete(`http://localhost:3001/SDCredo/fecuserfriendswaitinglist/deleted/${waitingid}`)
    .then((res) => {
      const listOne = [...list] || [];
      const listTwo = listOne.filter((i) => i.waitingid !== res.data.fec_user_friends_waiting_id);
      const newUser = { ...userinfo };
      newUser.waitingtogetresponedlist = listTwo;
      dispatch(SetUserInfo(newUser));
    })
    .catch((err) => console.log(err));
};

export const UpdateUserfriendWaitinglist = ({
  dispatch = () => {},
  userinfo = {},
  list = [],
  waitingid = 0,
  isAddingFriends = false,
}) => {
  axios.put(`http://localhost:3001/SDCredo/fecuserfriendswaitinglist/update/${waitingid}/${isAddingFriends}`)
    .then((res) => {
      const listOne = [...list] || [];
      const listTwo = listOne.filter((i) => i.waitingid !== res.data.fec_user_friends_waiting_id);
      const newUser = { ...userinfo };
      newUser.waitingtoaddfriendslist = listTwo;
      dispatch(SetUserInfo(newUser));
      if (isAddingFriends === true) {
        const newObj = {};
        newObj.fec_user_id = res.data.fec_user_id;
        newObj.fec_friends_id = res.data.fec_friends_id;
        newObj.fec_show_fever_list = userinfo.isshowfeverlist;
        newObj.fec_show_shopping_list = userinfo.isshowshoppinglist;
        PostUserFriend({
          friendInfo: newObj,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const LoadCheckedUserFriendIdVailed = ({
  dispatch = () => {},
  friendList = [],
  userId = 1,
  friendId = 2,
  userInformation = {},
  func = () => {},
}) => {
  let waitingtogetresponedlist;
  const list = userInformation.waitingtogetresponedlist;
  if (list !== null) {
    waitingtogetresponedlist = [...list];
  } else {
    waitingtogetresponedlist = [];
  }
  const waitingList = waitingtogetresponedlist.filter((i) => i.friendsid === friendId);
  if (waitingList.length !== 0) {
    const id = waitingList[0].friendsid;
    const {
      lastname,
      firstname,
      city,
    } = waitingList[0].friendsinfo;
    func(`Still waiting for ${id} ${firstname} ${lastname} in ${city} to be responsed !`);
  } else {
    axios(`http://localhost:3001/SDCredo/fecusercheck/${friendId}`)
      .then((res) => {
        const len = res.data.length;
        if (len < 1) {
          func('wrong id');
        } else {
          const isAutoAdding = res.data[0].fec_user_auto_add_friends;
          if (isAutoAdding === true) {
            const friendInfo = { ...res.data[0] };
            friendInfo.fec_user_id = userId;
            friendInfo.fec_friends_id = friendId;
            friendInfo.fec_show_fever_list = res.data[0].fec_user_show_fever_list;
            friendInfo.fec_show_shopping_list = res.data[0].fec_user_show_shopping_list;
            PostUserFriend({
              dispatch,
              friendInfo,
              friendList,
              func,
            });
          } else {
            const friendWaitingInfo = { ...res.data[0] };
            friendWaitingInfo.fec_user_id = userId;
            friendWaitingInfo.fec_friends_id = friendId;
            friendWaitingInfo.fec_is_still_waiting = true;
            friendWaitingInfo.fec_is_adding_friends = false;
            postUserfriendWaitinglist({
              friendWaitingInfo,
              userInformation,
              dispatch,
              func,
            });
          }
        }
      })
      .catch((err) => console.log(err));
  }
};

export const LoadUserFriendsFever = ({
  dispatch = () => {},
  userid = '',
  friendList = [],
  index = 0,
}) => {
  axios(`http://localhost:3001/SDCredo/fecuserfever/${userid}`)
    .then((res) => {
      const newObj = { ...friendList[index] };
      const newList = [...friendList];
      newObj.feverlist = res.data;
      newList[index] = newObj;
      dispatch(SetUserFriendsList(newList));
    })
    .catch((err) => console.log(err));
};

export const PostUserFever = ({
  dispatch = () => {},
  feverList = [],
  feverInfo = {},
}) => {
  axios.post('http://localhost:3001/SDCredo/fecuserfever/add', {
    feverInfo,
  })
    .then((res) => {
      const list = [...feverList, res.data];
      dispatch(SetUserFeverList(list));
    })
    .catch((err) => console.log(err));
};

export const DeletedUserFever = ({
  dispatch = () => {},
  feverId = 0,
  feverList = [],
}) => {
  axios.delete(`http://localhost:3001/SDCredo/fecuserfever/delete/${feverId}`)
    .then((res) => {
      const list = feverList.filter((i) => i.fec_user_fever_id !== res.data.fec_user_fever_id);
      dispatch(SetUserFeverList(list));
    })
    .catch((err) => console.log(err));
};

export const UpdateUserInfo = ({
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
