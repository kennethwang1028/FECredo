import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  userNameEnter,
  userEmailEnter,
  userPasswordEnter,
  userCityEnter,
} from '../../Redux';

import InputText from './InputText/InputText';

import {
  LogInContainer,
  SignInContainer,
  SignInText,
  SignInButton,
} from './LogInStyle';

const SignUp = () => {
  const isIconListClicked = useSelector((state) => state.sideBar.isIconListClicked);
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [city, setCity] = useState('');

  const [listWarning, setListWarning] = useState([]);

  const handleChangeName = (event) => {
    setName(event.target.value);
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

  const handleClickedCreateAccount = () => {
    const arr = [];
    if (name.length === 0) {
      arr.push('name');
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
      dispatch(userNameEnter(name));
      dispatch(userEmailEnter(email));
      dispatch(userPasswordEnter(password));
      dispatch(userCityEnter(city));
      history.push('/home');
    }
  };

  return (
    <LogInContainer
      style={isIconListClicked ? { paddingLeft: '250px' } : null}
    >
      <SignInContainer style={{ height: '500px' }}>
        <SignInText>Create account</SignInText>
        <InputText
          text="Your Name"
          isWarning={listWarning.includes('name')}
          handleChange={handleChangeName}
          warningText="Enter your Name"
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
        <SignInButton
          onClick={handleClickedCreateAccount}
        >
          Create your account
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
    </LogInContainer>
  );
};

export default SignUp;
