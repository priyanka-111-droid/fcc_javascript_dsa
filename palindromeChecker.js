function checkPal(str){
  if(str.length<2)
    return true;
  else if(str[0]==str[str.length-1])
    return checkPal(str.slice(1,str.length-1));
  else
    return false;
}
function palindrome(str) {
  str=str.replace(/[^0-9A-Za-z]/g, '').toLowerCase()
  return checkPal(str);
}
palindrome("eye");