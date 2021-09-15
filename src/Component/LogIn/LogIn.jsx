import React from 'react';
import { useSelector } from 'react-redux';

import SignIn from './SignIn/SignIn';
import SignedIn from './SignedIn/SignedIn';
import {
  LogInContainerStyle,
  LogInTextStyle,
  SignUpButtonStyle,
} from './LogInStyle';

const LogIn = () => {
  const width = useSelector((state) => state.window.countInfoWidth);
  const {
    isLoadUserInfo,
    isUserEmailExited,
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
    return <SignedIn />;
  };
  return (
    <LogInContainerStyle width={width}>
      {renderPage()}
    </LogInContainerStyle>
  );
};

export default LogIn;
