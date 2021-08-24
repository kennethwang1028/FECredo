const urlCreated = (photo, comsList) => {
  if (photo === 'null' || photo === null) {
    return './no.jpeg';
  }
  const {
    comid, fomrmatid, size, url,
  } = photo;
  return comsList[comid - 1].comtext + url + comsList[fomrmatid - 1].comtext + size;
};

export default urlCreated;
