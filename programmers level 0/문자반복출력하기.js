function solution(my_string, n) {
  let newArr = "";
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      newArr += my_string[i];
    }
  }
  return newArr;
}
