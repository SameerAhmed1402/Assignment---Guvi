const removeDuplicates = arr => {
    const uniqueArray = [];
    for (const item of arr) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
    return uniqueArray;
  };
  
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(inputArray);
  
  console.log("Unique Array:", uniqueArray);
  