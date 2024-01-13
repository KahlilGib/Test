// function e(n) {
//     for (let i = 1; i <= n; i++) {
//       let pattern = '';
//       for (let j = 1; j <= n; j++) {
//         if (j <= i) {
//           pattern += j;
//         } else {
//           pattern += '*';
//         }
//       }
//       console.log(pattern);
//     }
//   }
  

//   e(5);
//   e(4);

  function f(arr) {
    if (arr.length < 2) {
      return null;
    }
  
    let maxDifference = arr[1] - arr[0];
    let minElement = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      const currentDifference = arr[i] - minElement;
      maxDifference = Math.max(maxDifference, currentDifference);
      minElement = Math.min(minElement, arr[i]);
    }
  
    return maxDifference;
  }
  

  const result = f([10, 7, 5, 8, 11, 9, 1]);

  console.log(result)



  