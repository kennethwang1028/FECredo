import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  PostUserFriend,
  LoadCheckedUserFriendIdVailed,
} from '../../../Redux';

import {
  LogInTextStyle,
  FeverStyle,
  CategorySelectStyle,
  RowContainer,
} from '../FeverStyle';

const AddFriends = () => {
  const dispatch = useDispatch();

  const {
    userInfo,
    userFriendsList,
  } = useSelector((state) => state.user);

  const {
    countInfoWidth,
  } = useSelector((state) => state.window);

  const [textNumber, setTextNumber] = useState('');
  // const [alreadyFrinedInfo, setAlreadyFrinedInfo] = useState('');
  const [message, setMessage] = useState('');

  const handleChangedFriendsId = (event) => {
    setTextNumber(event.target.value);
  };

  const handleClickedBack = () => {
    // setAlreadyFrinedInfo('');
    setTextNumber('');
    setMessage('');
  };

  const handleClickedSearch = () => {
    if (Number(textNumber) === userInfo.id) {
      setMessage(`${textNumber} is your own id`);
    } else {
      const list = userFriendsList.filter((i) => i.fec_friends_id === Number(textNumber));
      if (list.length !== 0) {
        const text = `${list[0].fec_friends_id} ${list[0].fec_user_first_name} ${list[0].fec_user_last_name} in ${list[0].fec_user_city}`;
        // setAlreadyFrinedInfo(text);
        setMessage(`You and ${text} are already friends!!`);
      } else {
        LoadCheckedUserFriendIdVailed({
          dispatch,
          friendList: userFriendsList,
          userId: userInfo.id,
          friendId: Number(textNumber),
          userInformation: { ...userInfo },
          func: setMessage,
        });
      }
    }
  };

  return (
    <FeverStyle
      width={countInfoWidth * 0.9}
    >
      <LogInTextStyle>
        Add new Friends!
      </LogInTextStyle>
      {message !== ''
        ? (
          <RowContainer>
            <LogInTextStyle>
              {message}
            </LogInTextStyle>
            <button
              type="button"
              onClick={handleClickedBack}
            >
              back
            </button>
          </RowContainer>
        ) : (
          <RowContainer>
            <LogInTextStyle>
              Please enter your friend by id :
            </LogInTextStyle>
            <input
              type="number"
              onChange={handleChangedFriendsId}
            />
            <button
              type="button"
              onClick={handleClickedSearch}
            >
              Search
            </button>
          </RowContainer>
        )}
    </FeverStyle>
  );
};

export default AddFriends;
