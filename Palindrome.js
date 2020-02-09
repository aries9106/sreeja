/**
 * 
 */
// Try edit message


console.log(PalindromeSeachReturn('civic'))

function PalindromeSeachReturn(value){
  if(value.length > 1){
    var pal_val = [];
    if(palindromeCheck(value)){
      pal_val.push(value);      
    }
    
    if(palindromeCheck(value.substring(1,value.length-1))){
      pal_val.push(value.substring(1,value.length-1));
    }

    return pal_val;
  }
  return 'Palindrome must be at least 2 characters long';
  function palindromeCheck(val){
    if(val.length > 1 && (val.split('').reverse().join('') == val)){
       return true;      
    }
    return false;
  }
}