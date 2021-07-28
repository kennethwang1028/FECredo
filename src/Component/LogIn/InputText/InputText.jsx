import React from 'react';

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
        warning={isWarning}
        type="text"
        onChange={handleChange}
      />
      {isWarning ? (
        <WarningText>
          { `!! ${warningText} !!` }
        </WarningText>
      ) : null}
    </div>
  );
};

export default InputText;
