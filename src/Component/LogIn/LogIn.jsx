import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userEmailEnter } from '../../Redux';

import InputText from './InputText/InputText';

import {
  LogInContainer,
  SignInContainer,
  SignInText,
  SignInButton,
  LogInText,
  SignUpButton,
} from './LogInStyle';

const LogIn = () => {
  const isIconListClicked = useSelector((state) => state.sideBar.isIconListClicked);
  const dispatch = useDispatch();

  const [email, seteEmail] = useState('');
  const [isWarning, setIsWarning] = useState(false);

  const handleChange = (event) => {
    seteEmail(event.target.value);
  };

  const handleClickedContinue = () => {
    if (!email.includes('@') || !email.includes('.')) {
      setIsWarning(true);
    } else if (email[0] === '@' || email[0] === '.') {
      setIsWarning(true);
    } else if (email[email.length - 1] === '@' || email[email.length - 1] === '.') {
      setIsWarning(true);
    } else {
      setIsWarning(false);
      dispatch(userEmailEnter(email));
    }
  };

  return (
    <LogInContainer style={isIconListClicked ? { paddingLeft: '250px' } : null}>
      <SignInContainer>
        <SignInText>Sign-In</SignInText>
        <InputText
          text="Email"
          isWarning={isWarning}
          handleChange={handleChange}
          warningText="Enter your email"
        />
        <SignInButton
          onClick={handleClickedContinue}
        >
          Continue
        </SignInButton>
        <div>
          {'By continuing, you agree to Forest\'s '}
          <a href="/conditionsofuse">Conditions of Use</a>
          {' and '}
          <a href="/privacynotice">Privacy Notice</a>
          .
        </div>
        <div>Need Help?</div>
      </SignInContainer>
      <LogInText> New to Forest?</LogInText>
      <SignUpButton to="/signup">
        Create Account
      </SignUpButton>
    </LogInContainer>
  );
};

export default LogIn;
