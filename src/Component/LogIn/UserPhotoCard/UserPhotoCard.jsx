import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  RowStyle,
  EditButtonStyle,
} from '../LogInStyle';

const UserPhotoCard = (props) => {
  const {
    src,
    func,
  } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [inputText, setInputText] = useState(src);

  const handleClicked = () => {
    func(inputText);
    setIsEdit(!isEdit);
  };

  const handleChanged = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <RowStyle>
        <img
          alt="userPhoto"
          src={inputText === null ? './icon/no.jpeg' : inputText}
          width="100"
          height="100"
        />
        <EditButtonStyle
          type="button"
          onClick={handleClicked}
          width="50"
          height="50"
        >
          {!isEdit
            ? <>Edit</>
            : <>Update</>}
        </EditButtonStyle>
      </RowStyle>
      <RowStyle>
        {!isEdit
          ? <></>
          : (
            <input
              type="text"
              placeholder="please enter the URL"
              onChange={handleChanged}
            />
          )}
      </RowStyle>
    </>
  );
};

UserPhotoCard.propTypes = {
  src: PropTypes.string,
  func: PropTypes.func,
};

UserPhotoCard.defaultProps = {
  src: './icon/no.jpeg',
  func: () => (1),
};

export default UserPhotoCard;
