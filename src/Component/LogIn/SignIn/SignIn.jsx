import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  SetUserType,
  FetchIsUserEmailVailed,
  FetchUser,
} from '../../../Redux';

import checkEmail from '../../Function/checkEmail';
import checkPassword from '../../Function/checkPassword';

import InputText from '../InputText/InputText';

import {
  SignInContainerStyle,
  SignInTextStyle,
  SignInButtonStyle,
  SwitcherStyle,
  RowStyle,
} from '../LogInStyle';

const SignIn = () => {
  const dispatch = useDispatch();

  const {
    userType,
    isUserEmailVailed,
    isUserPasswordVailed,
  } = useSelector((state) => state.user);

  const [email, seteEmail] = useState('');
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const [password, setPassword] = useState('');
  const [isWarningEmail, setIsWarningEmail] = useState(false);
  const [isWarningPassword, setIsWarningPassword] = useState(false);

  const handleChangeEmail = (event) => {
    seteEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClickedContinue = () => {
    const passwordChecked = checkPassword(password);
    const emailChecked = checkEmail(email);
    if (!emailChecked) {
      setIsWarningEmail(true);
    } else {
      setIsWarningEmail(false);
    }
    if (!passwordChecked) {
      setIsWarningPassword(true);
    } else {
      setIsWarningPassword(false);
    }
    if (emailChecked && !isWarningEmail) {
      FetchIsUserEmailVailed({
        dispatch,
        email,
      });
      if (passwordChecked && !isWarningPassword) {
        FetchUser({
          dispatch,
          email,
          password,
        });
      }
    }
  };

  const handleClickedUserType = () => {
    if (userType === 'user') {
      dispatch(SetUserType('owner'));
    } else {
      dispatch(SetUserType('user'));
    }
  };

  const handleClickedShowPassword = () => {
    setIsPasswordShowed(!isPasswordShowed);
  };

  return (
    <SignInContainerStyle>
      <RowStyle>
        <SignInTextStyle>Sign-In</SignInTextStyle>
        {userType}
        <SwitcherStyle
          type="button"
          userType={userType}
          onClick={handleClickedUserType}
        />
      </RowStyle>
      <InputText
        type="text"
        text="Email"
        isWarning={isWarningEmail}
        handleChange={handleChangeEmail}
        warningText="Enter your email"
      />
      {isUserEmailVailed === false ? <div>email is not vailed</div> : null}
      <InputText
        type={isPasswordShowed ? 'text' : 'password'}
        text="password"
        isWarning={isWarningPassword}
        handleChange={handleChangePassword}
        warningText="Enter your password"
      />
      <RowStyle>
        <input
          type="checkbox"
          onClick={handleClickedShowPassword}
        />
        Show Password
      </RowStyle>
      {isUserPasswordVailed === false ? <div>wrong Password</div> : null}
      <SignInButtonStyle
        type="button"
        onClick={handleClickedContinue}
      >
        Continue
      </SignInButtonStyle>
      <div>
        {'By continuing, you agree to Forest\'s '}
        <a href="/conditionsofuse">Conditions of Use</a>
        {' and '}
        <a href="/privacynotice">Privacy Notice</a>
        .
      </div>
      <div>Need Help?</div>
    </SignInContainerStyle>
  );
};

export default SignIn;
