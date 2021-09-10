const checkEmail = (email) => {
  if (!email.includes('@') || !email.includes('.')) {
    return false;
  } if (email[0] === '@' || email[0] === '.') {
    return false;
  } if (email[email.length - 1] === '@' || email[email.length - 1] === '.') {
    return false;
  }
  return true;
};

export default checkEmail;
