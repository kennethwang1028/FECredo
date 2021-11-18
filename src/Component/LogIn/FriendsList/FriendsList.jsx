import React from 'react';
import { useDispatch } from 'react-redux';

import {
  DeletedUserfriendWaitinglist,
  UpdateUserfriendWaitinglist,
} from '../../../Redux';

import {
  SignInTextStyle,
  SignInContainerStyle,
  EditButtonStyle,
  ColumnStyle,
  RowStyle,
} from '../LogInStyle';

const FriendsList = (props) => {
  const {
    list,
    type,
    userInfo,
  } = props;

  const dispatch = useDispatch();

  const cancelWaitingList = (id) => {
    DeletedUserfriendWaitinglist({
      dispatch,
      waitingid: id,
      userinfo: userInfo,
      list,
    });
  };

  const updateWaitingList = (id, boolean) => {
    UpdateUserfriendWaitinglist({
      dispatch,
      userinfo: userInfo,
      list,
      waitingid: id,
      isAddingFriends: boolean,
    });
  };

  const waitingtogetresponed = (i) => {
    const {
      friendsid,
      isaddingfriends,
      isstillwaitng,
      waitingid,
      friendsinfo,
    } = i;
    const {
      lastname,
      firstname,
      city,
    } = friendsinfo;

    const friend = `${friendsid} ${firstname} ${lastname} in ${city}`;
    if (type === 'Friends Request List' && isstillwaitng === true) {
      return (
        <ColumnStyle
          key={waitingid}
        >
          <SignInTextStyle>
            {`${friend} wants to be your friedns !`}
          </SignInTextStyle>
          <RowStyle>
            <EditButtonStyle
              type="button"
              onClick={() => updateWaitingList(waitingid, true)}
            >
              Accpect
            </EditButtonStyle>
            <EditButtonStyle
              type="button"
              onClick={() => updateWaitingList(waitingid, false)}
            >
              Reject
            </EditButtonStyle>
          </RowStyle>
        </ColumnStyle>
      );
    }

    if (type === 'Friends Request List' && isstillwaitng === false) {
      return null;
    }

    if (type === 'Friedns Waiting List' && isstillwaitng === false) {
      return (
        <ColumnStyle
          key={waitingid}
        >
          <SignInTextStyle>
            {`${friend} ${isaddingfriends ? 'accpected' : 'rejected'} to be your friends ~`}
          </SignInTextStyle>
          <EditButtonStyle
            type="button"
            onClick={() => cancelWaitingList(waitingid)}
          >
            Okay
          </EditButtonStyle>
        </ColumnStyle>
      );
    }
    return (
      <ColumnStyle
        key={waitingid}
      >
        <SignInTextStyle>
          {`${friend} is not responed yet!`}
        </SignInTextStyle>
        <EditButtonStyle
          type="button"
          onClick={() => cancelWaitingList(waitingid)}
        >
          Cancel
        </EditButtonStyle>
      </ColumnStyle>
    );
  };

  return (
    <SignInContainerStyle>
      <SignInTextStyle>
        {type}
      </SignInTextStyle>
      {list.map((i) => waitingtogetresponed(i))}
    </SignInContainerStyle>
  );
};

export default FriendsList;
