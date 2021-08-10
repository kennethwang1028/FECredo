const imgSize = (url, size) => {
  if (url.includes('https://images.unsplash.com')) {
    const num = url.lastIndexOf('&');
    const newUrl = url.slice(0, num);
    const num2 = newUrl.lastIndexOf('&');
    const newUrl1 = `${newUrl.slice(0, num2)}&w=${size}&q=80`;
    return newUrl1;
  }
  return url;
};

export default imgSize;
