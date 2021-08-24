import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SetFeatureValuesSelectedList,
} from '../../../Redux';

import {
  SearchPageButtonStyle,
  ContainerStyle,
  ColumnContainerStyle,
} from '../SearchStyle';

const valueSort = (list) => {
  const newList = list.sort((a, b) => {
    const nameA = a.valuename;
    const nameB = b.valuename;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return newList;
};

const FeaturesList = () => {
  const dispatch = useDispatch();
  const { countInfoWidth } = useSelector((state) => state.window);
  const featuresList = useSelector((state) => state.basicInfo.featuresList);
  const featureValuesSelectedList = useSelector((state) => state.search.featureValuesSelectedList);
  const [clickedList, setClickedList] = useState([]);

  const handleClickedFeatures = (event) => {
    const id = Number(event.target.id);
    let newList = [...clickedList];
    const index = clickedList.indexOf(id);
    if (index > -1) {
      newList.splice(index, 1);
    } else {
      newList = [...newList, id];
    }
    setClickedList(newList);
  };

  const handleClickedFeatureValues = (event) => {
    let newList = [...featureValuesSelectedList];
    const id = Number(event.target.id);
    const index = newList.indexOf(id);
    if (index > -1) {
      newList.splice(index, 1);
    } else {
      newList = [...newList, id];
    }
    dispatch(SetFeatureValuesSelectedList(newList));
  };

  return (
    <ColumnContainerStyle>
      {countInfoWidth > 700
        ? (
          <ContainerStyle
            width={countInfoWidth * 0.2}
          >
            {featuresList.map((i) => (
              <div
                key={i.featureid}
              >
                <SearchPageButtonStyle
                  id={i.featureid}
                  type="button"
                  onClick={handleClickedFeatures}
                >
                  {i.featurename}
                </SearchPageButtonStyle>
                {clickedList.includes(i.featureid)
                  ? (
                    <div>
                      {valueSort(i.featurevalue).map((j) => (
                        <div
                          key={j.valueid}
                        >
                          <input
                            type="checkbox"
                            checked={featureValuesSelectedList.includes(j.valueid)}
                            id={j.valueid}
                            onChange={handleClickedFeatureValues}
                          />
                          {j.valuename}
                        </div>
                      ))}
                    </div>
                  )
                  : null}
              </div>
            ))}
          </ContainerStyle>
        )
        : null}
    </ColumnContainerStyle>
  );
};

export default FeaturesList;
