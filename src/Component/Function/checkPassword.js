const checkPassword = (password) => {
  if (password.length < 6) {
    return false;
  }
  return true;
};

export default checkPassword;
