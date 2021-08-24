import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FeatureValuesListSelected,
} from '../../../Redux';

const FeaturesList = () => {
  const dispatch = useDispatch();
  const featuresList = useSelector((state) => state.basicInfo.featuresList);
  const featureValuesList = useSelector((state) => state.search.featureValuesList);
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
    let newList = [...featureValuesList];
    const id = Number(event.target.id);
    const index = newList.indexOf(id);
    if (index > -1) {
      newList.splice(index, 1);
    } else {
      newList = [...newList, id];
    }
    dispatch(FeatureValuesListSelected(newList));
  };

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

  return (
    <div>
      {featuresList.map((i) => (
        <div
          key={i.featureid}
        >
          <button
            id={i.featureid}
            type="button"
            onClick={handleClickedFeatures}
          >
            {i.featurename}
          </button>
          {clickedList.includes(i.featureid)
            ? (
              <div>
                {valueSort(i.featurevalue).map((j) => (
                  <div
                    key={j.valueid}
                  >
                    <input
                      type="checkbox"
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
    </div>
  );
};

export default FeaturesList;
