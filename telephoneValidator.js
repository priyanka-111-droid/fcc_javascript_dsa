function telephoneCheck(str) {
    let pattern = /^(1\s|1)?(\d{3}|\(\d{3}\))[-\s]?(\d{3}|\(\d{3}\))[-\s]?(\d{4}|\(\d{4}\))$/gm
    if(pattern.test(str))
    return true;
    else
    return false;
  }
  
  telephoneCheck("555-555-5555");