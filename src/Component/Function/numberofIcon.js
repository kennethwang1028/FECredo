const numberofIcon = (w, h, n) => {
  if (w <= 500) {
    const n1 = Math.floor(h / 50) - 3;
    if (n1 >= n) {
      return n;
    }
    return n1;
  } if (w >= (50 / 6) * 100) {
    const n2 = Math.floor(h / 70) - 3;
    if (n2 >= n) {
      return n;
    }
    return n2;
  }
  const n3 = Math.floor(h / 65) - 3;
  if (n3 >= n) {
    return n;
  }
  return n3;
};

export default numberofIcon;
