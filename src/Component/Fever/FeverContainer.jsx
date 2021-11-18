import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import urlCreated from '../Function/urlCreated';

import Fever from './Fever/Fever';
import FeverItems from './FeverItems/FeverItems';
import FriendsFever from './FriendsFever/FriendsFever';
import AddFriends from './AddFriends/AddFriends';

import {
  FeverContainerStyle,
  LogInButtonStyle,
  LogInTextStyle,
  FeverStyle,
} from './FeverStyle';

const FeverContainer = () => {
  const {
    isLoadUserInfo,
  } = useSelector((state) => state.user);

  const {
    productList,
  } = useSelector((state) => state.product);

  const {
    comsList,
  } = useSelector((state) => state.basicInfo);

  const [recentlyList, setRecentlyList] = useState([]);

  useEffect(() => {
    const newList = productList.map((i) => {
      const newObj = {
        product_id: i.productid,
        product_name: i.productname,
        price: i.styles[0].price,
        category_id: i.category.categoryid,
        photo: urlCreated({
          photo: i.styles[0].photos[0],
          comsList,
        }),
      };
      return newObj;
    });
    setRecentlyList(newList);
  }, [productList]);

  return (
    <FeverContainerStyle>
      <FeverStyle>
        <LogInTextStyle>
          Recently View
        </LogInTextStyle>
        <FeverItems
          productList={recentlyList}
        />
      </FeverStyle>
      {
        isLoadUserInfo
          ? (
            <>
              <LogInTextStyle>
                Fever Items
              </LogInTextStyle>
              <Fever />
              <AddFriends />
              <FriendsFever />
            </>
          )
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
