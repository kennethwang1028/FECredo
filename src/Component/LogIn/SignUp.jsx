import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  // PostUser,
  SetUserType,
} from '../../Redux';

import InputText from './InputText/InputText';

import {
  SwitcherStyle,
  RowStyle,
  LogInContainerStyle,
  SignInContainerStyle,
  SignInTextStyle,
  SignInButtonStyle,
} from './LogInStyle';

const SignUp = () => {
  const dispatch = useDispatch();
  const width = useSelector((state) => state.window.countInfoWidth);
  const { userType } = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [city, setCity] = useState('');

  const [listWarning, setListWarning] = useState([]);

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeReEnterPassword = (event) => {
    setReEnterPassword(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleClickedUserType = () => {
    if (userType === 'user') {
      dispatch(SetUserType('owner'));
    } else {
      dispatch(SetUserType('user'));
    }
  };

  const handleClickedCreateAccount = () => {
    const arr = [];
    if (firstName.length === 0) {
      arr.push('firstname');
    }
    if (lastName.length === 0) {
      arr.push('lastname');
    }
    if (!email.includes('@') || !email.includes('.')) {
      arr.push('email');
    } else if (email[0] === '@' || email[0] === '.') {
      arr.push('email');
    } else if (email[email.length - 1] === '@' || email[email.length - 1] === '.') {
      arr.push('email');
    }
    if (password.length < 6) {
      arr.push('password');
    }
    if (reEnterPassword !== password) {
      arr.push('reEnterPassword');
    }
    if (city === '') {
      arr.push('city');
    }
    if (arr.length > 0) {
      setListWarning(arr);
    } else {
      // const user = {
      //   first_name: firstName,
      //   last_name: lastName,
      //   email,
      //   password,
      //   city,
      // };
      // PostUser({ user });
      console.error('Need to signup')
    }
  };

  return (
    <LogInContainerStyle
      width={width}
    >
      <SignInContainerStyle>
        <RowStyle>
          <SignInTextStyle>Create account</SignInTextStyle>
          {userType}
          <SwitcherStyle
            type="button"
            userType={userType}
            onClick={handleClickedUserType}
          />
        </RowStyle>
        <InputText
          text="First Name"
          isWarning={listWarning.includes('firstname')}
          handleChange={handleChangeFirstName}
          warningText="Enter your first name"
        />
        <InputText
          text="Last Name"
          isWarning={listWarning.includes('lastname')}
          handleChange={handleChangeLastName}
          warningText="Enter your last name"
        />
        <InputText
          text="Email"
          isWarning={listWarning.includes('email')}
          handleChange={handleChangeEmail}
          warningText="Enter your email"
        />
        <InputText
          text="Password"
          isWarning={listWarning.includes('password')}
          handleChange={handleChangePassword}
          warningText="Passwords must be at least 6 characters."
        />
        <InputText
          text="Re-enter password"
          isWarning={listWarning.includes('reEnterPassword')}
          handleChange={handleChangeReEnterPassword}
          warningText="Not match"
        />
        <InputText
          text="City"
          isWarning={listWarning.includes('city')}
          handleChange={handleChangeCity}
          warningText="Enter City"
        />
        <SignInButtonStyle
          onClick={handleClickedCreateAccount}
        >
          Create your account
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
    </LogInContainerStyle>
  );
};

export default SignUp;
