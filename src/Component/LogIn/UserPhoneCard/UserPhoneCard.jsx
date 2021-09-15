import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  RowStyle,
  EditButtonStyle,
  WarningText,
} from '../LogInStyle';

const UserPhoneCard = (props) => {
  const {
    area,
    phone,
    areafunc,
    phonefunc,
  } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [inputText, setInputText] = useState(area + phone);

  const handleClicked = (event) => {
    if (event.target.textContent === 'Update') {
      if (!Number(inputText) > 0 || String(inputText).length < 10) {
        setIsWarning(true);
      } else {
        areafunc(Number(inputText.slice(0, 3)));
        phonefunc(Number(inputText.slice(3)));
        setIsEdit(!isEdit);
        setIsWarning(false);
      }
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
        {'Phone Number : '}
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
        {area === '123' && phone === '4567890' ? <>Example : </> : null}
        {!isEdit
          ? <>{`(${area}) ${phone.slice(0, 3)} - ${phone.slice(3)}`}</>
          : (
            <input
              type="tel"
              maxLength="10"
              placeholder={`${area}${phone}`}
              onChange={handleChanged}
            />
          )}
      </RowStyle>
      <RowStyle>
        {isWarning
          ? <WarningText>Phone Number is not vailed</WarningText>
          : <></>}
      </RowStyle>

    </>
  );
};

UserPhoneCard.propTypes = {
  area: PropTypes.string,
  phone: PropTypes.string,
  areafunc: PropTypes.func,
  phonefunc: PropTypes.func,
};

UserPhoneCard.defaultProps = {
  area: '123',
  phone: '4567890',
  areafunc: () => (1),
  phonefunc: () => (1),
};

export default UserPhoneCard;
