const converter={
    1:"I",
    4:"IV",
    5:"V",
    9:"IX",
    10:"X",
    40:"XL",
    50:"L",
    90:"XC",
    100:"C",
    400:"CD",
    500:"D",
    900:"CM",
    1000:"M"
  };
  let numbers = Object.keys(converter)
  let revNumbers=numbers.slice().reverse();
  
  function getMinimumNumber(num){
    let minNumber=0;
    for(let i=0;i<revNumbers.length;i++){
        if(revNumbers[i]<=num){
          minNumber=revNumbers[i];
          return minNumber;
        }
    }
  }
  function convertToRoman(num) {
    let str="";
    while(num>0){
      let minNumber = getMinimumNumber(num);
      str=str+converter[minNumber];
      num=num-minNumber;
    }
    return str;
  }
  convertToRoman(2);