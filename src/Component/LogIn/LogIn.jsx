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
  const { isLoadUserInfo } = useSelector((state) => state.user);
  return (
    <LogInContainerStyle width={width}>
      {!isLoadUserInfo
        ? (
          <>
            <SignIn />
            <LogInTextStyle> New to Forest?</LogInTextStyle>
            <SignUpButtonStyle to="/signup">
              Create Account
            </SignUpButtonStyle>
          </>
        )
        : <SignedIn />}
    </LogInContainerStyle>
  );
};

export default LogIn;
