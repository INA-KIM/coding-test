function solution(n) {
  let answer = 0;
  let nStr = String(n);
  for (let i = 0; i < nStr.length; i++) {
    answer += parseInt(nStr[i]);
  }
  return answer;
}

function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), 0);
}
