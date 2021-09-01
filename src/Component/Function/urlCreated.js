const urlCreated = ({
  photo,
  comsList,
}) => {
  if (photo === 'null' || photo === null || photo === undefined) {
    return './icon/no.jpeg';
  }
  const {
    comid, formatid, size, url,
  } = photo;
  return comsList[Number(comid) - 1].comtext + url + comsList[Number(formatid) - 1].comtext + size;
};

export default urlCreated;
