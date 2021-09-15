import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  FetchUser,
  FetchUserFever,
} from '../../Redux';

import Fever from './Fever/Fever';

import {
  FeverContainerStyle,
  LogInButtonStyle,
} from './FeverStyle';

const FeverContainer = () => {
  const {
    isLoadUserInfo,
    userInfo,
    userType,
  } = useSelector((state) => state.user);

  /// delet this later
  const dispatch = useDispatch();

  useEffect(() => {
    FetchUser({
      type: userType,
      dispatch,
      email: '123@gmail.com',
      password: '123456',
    });
  }, []);
  ///

  useEffect(() => {
    if (isLoadUserInfo) {
      FetchUserFever({
        type: userType,
        dispatch,
        userid: userInfo.id,
      });
    }
  }, [userInfo.id, isLoadUserInfo]);

  return (
    <FeverContainerStyle>
      {
        isLoadUserInfo
          ? <Fever />
          : (
            <>
              <>Please Log In Your Account</>
              <LogInButtonStyle
                to="/login"
              >
                Log In
              </LogInButtonStyle>
            </>
          )
      }
    </FeverContainerStyle>
  );
};

export default FeverContainer;
