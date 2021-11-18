import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import urlCreated from '../../../../Function/urlCreated';

import {
  ProductSmallImageContainer,
  ProductSmallImageButtonStyle,
} from '../../../ProductStyle';

const ProductSmallImages = (props) => {
  const {
    photosList,
    photoIndex,
    indexChanged,
  } = props;

  const { comsList } = useSelector((state) => state.basicInfo);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    const len = photosList.length;
    if (len <= 6) {
      setStart(0);
      setEnd(len);
    } else if (photoIndex < 3 && photoIndex + 3 <= len) {
      setStart(0);
      setEnd(6);
    } else if (photoIndex > 3 && photoIndex + 3 <= len) {
      setStart(photoIndex - 3);
      setEnd(photoIndex + 3);
    } else if (photoIndex > 3 && photoIndex + 3 > len) {
      setStart(len - 6);
      setEnd(len);
    }
  }, [photosList, photoIndex]);

  const handleClicked = (event) => {
    indexChanged(Number(event.target.id));
  };

  return (
    <ProductSmallImageContainer>
      {photosList.slice(start, end).map((i, index) => (
        <ProductSmallImageButtonStyle
          key={i.photoid}
          id={index + start}
          src={urlCreated({
            photo: i,
            comsList,
          })}
          width="50"
          height="50"
          isSeleced={photoIndex === index + start}
          onClick={handleClicked}
        />
      ))}
    </ProductSmallImageContainer>
  );
};

ProductSmallImages.propTypes = {
  photosList: PropTypes.arrayOf(PropTypes.shape({})),
  photoIndex: PropTypes.number,
  indexChanged: PropTypes.func,
};

ProductSmallImages.defaultProps = {
  photosList: [{}],
  photoIndex: 0,
  indexChanged: () => 1,
};

export default ProductSmallImages;
