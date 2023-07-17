const uppercaseArray = Array.from("abcdefghijklmnopqrstuvwxyz",char=>char.toUpperCase());

function rot13(str) {
  let newStr="";
  for(let i=0;i<str.length;i++){
      let posAlpha = uppercaseArray.indexOf(str[i])
      if(/^[A-Za-z]$/.test(str[i])){
          if(str[i]<='M')
            newStr = newStr+ uppercaseArray[posAlpha+13]
          else
            newStr+=uppercaseArray[posAlpha-13]
      }
      else 
      newStr+=str[i];
  }
  return newStr;
}

rot13("SERR PBQR PNZC");