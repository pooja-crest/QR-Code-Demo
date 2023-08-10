const numberType = value => {
  if (value.charCode === 0 || /\d/.test(String.fromCharCode(value.charCode))) {
      return true
  } else {
      value.preventDefault();
  }
}

const alphaNumberic = value => {
  if (value.charCode === 0 || /^[A-Za-z0-9 ]+$/.test(String.fromCharCode(value.charCode))) {
      return true
  } else {
      value.preventDefault();
  }
}

export {
  numberType,
  alphaNumberic
}