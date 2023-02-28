// implement buble sort algorithmt

const bubleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let isSwapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
};
console.log(bubleSort([3, 2, 1, 6, 5, 4]));

const findSum = (arr, sum) => {
  let result = [];
  let hashmap = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashmap[arr[i]]) {
      result.push([arr[i], hashmap[arr[i]]]);
    } else {
      hashmap[sum - arr[i]] = arr[i];
    }
  }
  return result;
};

console.log(findSum([1, 2, 3, 4, 5, 6, 7, 8], 9));

// quich short/

const quickShort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let piviot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < piviot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickShort(left), piviot, ...quickShort(right)];
  // const operation=(arr)=>{
  //     if(left.length==1 || right.length==1){
  //     return
  //     }
  // }

  // operation(arr)
};

console.log(quickShort([4, 3, 5, 1, 2]));

const quickShort2 = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let piviot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < piviot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickShort2(left), piviot, ...quickShort2(right)];
};

console.log(quickShort2([4, 3, 2, 1, 4, 6, 7]));

const bucketSort = (arr) => {
  let b = new Array(arr.length);
  // console.log(b);
  for (let i = 0; i < arr.length; i++) {
    b[arr[i]] = arr[i];
  }
  return b;
};

console.log(bucketSort([4, 3, 2, 1, 7, 6, 5, 0]));

const bucketSort2 = (arr) => {
  let b = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    b[arr[i]] = arr[i];
  }
  return b;
};

console.log(bucketSort2([4, 3, 2, 1, 7, 6, 5, 0]));

const insertionSort = (arr) => {
  // 1=> start from index 1
  // compare the first one with porevious one if greater then
  // store current oindex value witrh the previous value
  // while loop where j is >=0; && arr[j]> cur
  // means previous valiue is greater then current

  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
  return arr;
};

console.log(insertionSort([0, 3, 1, 2, 7, 6, 5, 4]));

mergeShort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid); //slice will create a copy of both the array
  const rightArr = arr.slice(mid);

  return merge(mergeShort(leftArr), mergeShort(rightArr));
};

const merge = (left, right) => {
  const sortedArray = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
};

console.log(mergeShort([-6, -2, 4, 8, 20]));

console.log(replace([1,2,3,"assd", 2]));


