import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  FetchUserFever,
} from '../../../Redux';

import {
  LogInTextStyle,
  FeverStyle,
  CategorySelectStyle,
} from '../FeverStyle';

const Fever = () => {
  const dispatch = useDispatch();

  const {
    userInfo,
    userFeverList,
  } = useSelector((state) => state.user);

  const {
    countInfoWidth,
  } = useSelector((state) => state.window);

  const {
    categoriesList,
  } = useSelector((state) => state.basicInfo);

  const {
    firstname,
    lastname,
    city,
  } = userInfo;

  const handleChangeSelect = (event) => {
    const index = event.target.selectedIndex;
    const id = categoriesList[index].categoryid;
    console.log(event.target)
  };

  return (
    <FeverStyle
      width={countInfoWidth * 0.9}
    >
      <LogInTextStyle>
        {`${firstname} ${lastname} in ${city}`}
      </LogInTextStyle>
      <CategorySelectStyle
        onChange={handleChangeSelect}
      >
        {categoriesList.map((i) => (
          <option key={i.categoryid}>
            {i.categoryname}
          </option>
        ))}
      </CategorySelectStyle>
    </FeverStyle>
  );
};

export default Fever;
