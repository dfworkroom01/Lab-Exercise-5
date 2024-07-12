function replaceNumWithStringInArray(arr, n, str) {
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] === n) {
        arr[i] = str;
      }
       
    }
   }
  
  let a = ['cat', 4,'mouse', 'giraffe', 4]; 
  console.log('before', a);

  replaceNumWithStringInArray(a, 4, 'dog');  
  console.log('after', a);

    a.splice(0,1, 'turtle')
    console.log('after changing all numbers', a);

    removed = a.splice(4, 1);
    console.log('remove the last element', a);