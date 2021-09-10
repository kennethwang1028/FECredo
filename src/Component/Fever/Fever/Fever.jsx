import React from 'react';
import { useSelector } from 'react-redux';

const Fever = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <>
      {Date.now()}
    </>
  );
};

export default Fever;
