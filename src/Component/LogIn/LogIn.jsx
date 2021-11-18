import React from 'react';
import { useSelector } from 'react-redux';

import SignIn from './SignIn/SignIn';
import SignedIn from './SignedIn/SignedIn';
import FriendsList from './FriendsList/FriendsList';

import {
  LogInContainerStyle,
  LogInTextStyle,
  SignUpButtonStyle,
  RowStyle,
  ColumnStyle,
} from './LogInStyle';

const LogIn = () => {
  const width = useSelector((state) => state.window.countInfoWidth);

  const {
    isLoadUserInfo,
    isUserEmailExited,
    userInfo,
  } = useSelector((state) => state.user);

  const renderPage = () => {
    if (!isLoadUserInfo && !isUserEmailExited) {
      return (
        <>
          <SignIn />
          <LogInTextStyle> New to Forest?</LogInTextStyle>
          <SignUpButtonStyle to="/signup">
            Create Account
          </SignUpButtonStyle>
        </>
      );
    }

    if (!isLoadUserInfo && isUserEmailExited) {
      return (
        <>
          <LogInTextStyle> Email already Exited !!</LogInTextStyle>
          <SignUpButtonStyle to="/signup">
            Create Account
          </SignUpButtonStyle>
          <LogInTextStyle> or </LogInTextStyle>
          <SignIn />
        </>
      );
    }

    if (isLoadUserInfo && width <= 600) {
      return <SignedIn />;
    }

    if (isLoadUserInfo && width >= 1200) {
      return (
        <RowStyle>
          <FriendsList
            list={userInfo.waitingtoaddfriendslist || []}
            type="Friends Request List"
            userInfo={userInfo}
          />
          <SignedIn />
          <FriendsList
            list={userInfo.waitingtogetresponedlist || []}
            type="Friedns Waiting List"
            userInfo={userInfo}
          />
        </RowStyle>
      );
    }

    return (
      <RowStyle>
        <ColumnStyle>
          <FriendsList
            list={userInfo.waitingtoaddfriendslist || []}
            type="Friends Request List"
            userInfo={userInfo}
          />
          <FriendsList
            list={userInfo.waitingtogetresponedlist || []}
            type="Friedns Waiting List"
            userInfo={userInfo}
          />
        </ColumnStyle>
        <SignedIn />
      </RowStyle>
    );
  };

  return (
    <LogInContainerStyle width={width}>
      {renderPage()}
    </LogInContainerStyle>
  );
};

export default LogIn;
