export function checkInputNumbers(number){
  for(let i=0; i<number.length; i++){
    if(number[i].charCodeAt()<48 || number[i].charCodeAt()>57)return false
  }
  return true;
} 

/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/