const rotateArray = (arr, k) => {
    const n = arr.length;
    
    // Check if k is greater than array length
    k = k % n;
    
    // Slice the array into two parts and rotate them separately
    const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    
    return rotatedArray;
  };
  
  const inputArray = [5,6,7,8,9,10,11];
  const k = 3;
  const rotatedArray = rotateArray(inputArray, k);
  
  console.log("Rotated Array:", rotatedArray);
  