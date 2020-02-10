/**
 * 
 */
// Try edit message


console.log(PalindromeSeachReturn('civic'))
/*** this method contains code to return an array of all the palindromes in a given value, if there are no palindromes then it return empty array***/
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
  
  /** method to check if given value is palindrome or **/
  function palindromeCheck(val){
    if(val.length > 1 && (val.split('').reverse().join('') == val)){
       return true;      
    }
    return false;
  }
}