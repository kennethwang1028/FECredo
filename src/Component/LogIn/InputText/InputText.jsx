import React from 'react';
import PropTypes from 'prop-types';

import {
  SignInInput,
  WarningText,
} from '../LogInStyle';

const InputText = (props) => {
  const {
    text,
    isWarning,
    handleChange,
    warningText,
    isVailed,
    type,
  } = props;

  return (
    <div>
      <div>{text}</div>
      <SignInInput
        data-testid="input"
        warning={isWarning}
        type={type}
        onChange={handleChange}
      />
      {isWarning ? (
        <WarningText
          data-testid="warning"
        >
          { `!! ${warningText} !!` }
        </WarningText>
      ) : null}
      {isVailed === false ? (
        <WarningText
          data-testid="warning"
        >
          !! Email not Vailed !!
        </WarningText>
      ) : null}
    </div>
  );
};

InputText.propTypes = {
  text: PropTypes.string,
  isWarning: PropTypes.bool,
  handleChange: PropTypes.func,
  warningText: PropTypes.string,
  isUserEmailVailed: PropTypes.bool,
};

InputText.defaultProps = {
  text: '',
  isWarning: false,
  handleChange: () => 1,
  warningText: '',
  isUserEmailVailed: null,
};

export default InputText;
