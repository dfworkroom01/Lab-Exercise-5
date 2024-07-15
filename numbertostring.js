//case: we have a string with a mix of string and number at the index of 1 and 4 of the array
//first, replace all numbers with strings
function replaceNumWithStringInArray(arr, n, str) {
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] === n) {
        arr[i] = str;
      }
       
    }
   }
//the original array with a mix of numbers and strings
  let a = ['cat', 4,'mouse', 'giraffe', 4]; 
  console.log('before', a);
//To replace numbers at index 1 and 4 of the array with a string
  replaceNumWithStringInArray(a, 4, 'dog');  
  console.log('after', a);

  //extra: changing the zero iondex in the array, which was 'cat', with ;turtle' 
    a.splice(0,1, 'turtle')
    console.log('after changing all numbers', a);
   
  //remove the 4th index position, which was 'dog' from the array
    removed = a.splice(4, 1);
    console.log('remove the last element', a);