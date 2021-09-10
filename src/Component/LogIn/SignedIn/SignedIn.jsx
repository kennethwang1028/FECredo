import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  SetUserInfo,
  IsUserEmailVailed,
  IsUserPasswordVailed,
  IsLoadUserInfo,
} from '../../../Redux';

import UserInfoCard from '../UserInfoCard/UserInfoCard';
import UserPhoneCard from '../UserPhoneCard/UserPhoneCard';
import UserPhotoCard from '../UserPhotoCard/UserPhotoCard';

import {
  SignInContainerStyle,
  SignUpButtonStyle,
  LogInButtonStyle,
} from '../LogInStyle';

const SignedIn = () => {
  const dispatch = useDispatch();

  const {
    userInfo,
  } = useSelector((state) => state.user);

  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState(userInfo.password);
  const [firstName, setFirstName] = useState(userInfo.firstname);
  const [lastName, setLastName] = useState(userInfo.lastname);
  const [city, setCity] = useState(userInfo.city);
  const [zipCode, setZipCode] = useState(userInfo.zipcode);
  const [areaCode, setAreaCode] = useState(userInfo.areacode);
  const [phone, setPhone] = useState(userInfo.phone);
  const [photo, setPhoto] = useState(userInfo.photo);

  const handleClicked = () => {
    dispatch(SetUserInfo({}));
    dispatch(IsUserEmailVailed(null));
    dispatch(IsUserPasswordVailed(null));
    dispatch(IsLoadUserInfo(false));
  };

  return (
    <SignInContainerStyle>
      <UserPhotoCard
        src={photo}
        func={setPhoto}
      />
      <UserInfoCard
        text="First Name"
        info={firstName}
        func={setFirstName}
      />
      <UserInfoCard
        text="Last Name"
        info={lastName}
        func={setLastName}
      />
      <UserInfoCard
        text="Email"
        info={email}
        func={setEmail}
      />
      <UserInfoCard
        text="Password"
        info={password}
        func={setPassword}
      />
      <UserInfoCard
        text="Zip Code"
        info={String(zipCode)}
        func={setZipCode}
      />
      <UserInfoCard
        text="City"
        info={city}
        func={setCity}
      />
      <UserPhoneCard
        area={String(areaCode)}
        phone={String(phone)}
        areafunc={setAreaCode}
        phonefunc={setPhone}
      />
      <SignUpButtonStyle
        to="/home"
      >
        Continue
      </SignUpButtonStyle>
      <LogInButtonStyle
        onClick={handleClicked}
      >
        Log Out
      </LogInButtonStyle>
    </SignInContainerStyle>
  );
};

export default SignedIn;
