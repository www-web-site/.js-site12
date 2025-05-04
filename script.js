const arr = [2, 4, 9, 10, 45, 67, 8, 90];
const nums = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    nums.push(arr[i]);
  }
}

console.log(arr, 'boshlanishdagi array');
console.log(nums, 'juft sonlarga ajratilgan array');