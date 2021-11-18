import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import FeverItems from '../FeverItems/FeverItems';

import {
  LogInTextStyle,
  FeverStyle,
  CategorySelectStyle,
} from '../FeverStyle';

const Fever = () => {
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

  const [categoryId, setCategoryId] = useState(0);
  const [categoryList, setCategoryList] = useState(categoriesList);

  useEffect(() => {
    const newList = [{ categoryid: 0, categoryname: 'All' }];
    const idCheckList = [0];
    for (let i = 0; i < userFeverList.length; i += 1) {
      const obj = userFeverList[i];
      if (!idCheckList.includes(obj.category_id)) {
        idCheckList.push(obj.category_id);
        newList.push({
          categoryid: obj.category_id,
          categoryname: categoriesList[obj.category_id].categoryname,
        });
      }
    }
    setCategoryList(newList);
  }, [userFeverList]);

  const handleChangeSelect = (event) => {
    const index = event.target.selectedIndex;
    const id = categoryList[index].categoryid;
    setCategoryId(id);
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
        {categoryList.map((i) => (
          <option key={i.categoryid}>
            {i.categoryname}
          </option>
        ))}
      </CategorySelectStyle>
      <FeverItems
        productList={userFeverList}
        categoryid={categoryId}
        showCancelbutton
      />
    </FeverStyle>
  );
};

export default Fever;
