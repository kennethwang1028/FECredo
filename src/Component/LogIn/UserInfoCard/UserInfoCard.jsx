import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import checkEmail from '../../Function/checkEmail';
import checkPassword from '../../Function/checkPassword';

import {
  SetUserInfo,
  UpdateUserInfo,
} from '../../../Redux';

import {
  RowStyle,
  EditButtonStyle,
  WarningText,
} from '../LogInStyle';

const UserInfoCard = (props) => {
  const {
    text,
    info,
    func,
  } = props;

  const dispatch = useDispatch();
  const {
    userInfo,
    userType,
  } = useSelector((state) => state.user);

  const [isEdit, setIsEdit] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [inputText, setInputText] = useState(info);

  const handleClicked = (event) => {
    if (event.target.textContent === 'Update') {
      const newUserInfo = { ...userInfo };
      const option = text.toLowerCase().split('').filter((i) => i !== ' ').join('');
      let value = inputText;
      let warning = false;
      if (text === 'Email') {
        warning = !checkEmail(inputText);
      } else if (text === 'Password') {
        warning = !checkPassword(inputText);
      } else if (text === 'Zip Code') {
        warning = /[a-z]/i.test(inputText);
        value = Number(value);
      } else if (text.length === 0) {
        warning = true;
      }
      if (warning === false) {
        newUserInfo[option] = value;
        dispatch(SetUserInfo(newUserInfo));
        UpdateUserInfo({
          userid: userInfo.id,
          title: text,
          value,
          type: userType,
        });
        setIsEdit(!isEdit);
        func(inputText);
      }
      setIsWarning(warning);
    } else {
      setIsEdit(!isEdit);
    }
  };

  const handleChanged = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <RowStyle>
        {`${text} : `}
        <EditButtonStyle
          type="button"
          onClick={handleClicked}
        >
          {!isEdit
            ? <>Edit</>
            : <>Update</>}
        </EditButtonStyle>
      </RowStyle>
      <RowStyle>
        {!isEdit
          ? <>{info}</>
          : (
            <input
              type="text"
              placeholder={info}
              onChange={handleChanged}
            />
          )}
      </RowStyle>
      <RowStyle>
        {isWarning
          ? <WarningText>{`${text} is not vailed`}</WarningText>
          : <></>}
      </RowStyle>
    </>
  );
};

UserInfoCard.propTypes = {
  text: PropTypes.string,
  info: PropTypes.string,
  func: PropTypes.func,
};

UserInfoCard.defaultProps = {
  text: '',
  info: '',
  func: () => (1),
};

export default UserInfoCard;
