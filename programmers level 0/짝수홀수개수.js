function solution(num_list) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 == 0) {
      odd++;
    } else {
      even++;
    }
  }
  return [odd, even];
}

// 좀더 깔끔한방법
function solution(list) {
  return list.reduce(
    (acc, cur) => (cur % 2 === 0 ? acc[0]++ : acc[1]++, acc),
    [0, 0]
  );
}
