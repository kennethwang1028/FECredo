import React from 'react';
import PropTypes from 'prop-types';

import {
  SignInInput,
  WarningText,
} from '../LogInStyle';

const InputText = (props) => {
  const {
    text, isWarning, handleChange, warningText,
  } = props;

  return (
    <div>
      <div>{text}</div>
      <SignInInput
        data-testid="input"
        warning={isWarning}
        type="text"
        onChange={handleChange}
      />
      {isWarning ? (
        <WarningText
          data-testid="warning"
        >
          { `!! ${warningText} !!` }
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
};

InputText.defaultProps = {
  text: '',
  isWarning: false,
  handleChange: () => 1,
  warningText: '',
};

export default InputText;
