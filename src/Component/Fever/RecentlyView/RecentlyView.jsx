import React from 'react';
import { useSelector } from 'react-redux';

const RecentlyView = () => {
  const {
    productList,
  } = useSelector((state)=> state.product);
};

export default RecentlyView;
