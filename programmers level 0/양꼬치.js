function solution(n, k) {
  var answer = 0;
  if (n < 10) {
    answer = 12000 * n + 2000 * k;
  } else if (n >= 10) {
    answer = 12000 * n + 2000 * k - 2000 * Math.trunc(n / 10);
  }
  return answer;
}

// Math.trunc() 소숫점 이하는 버리는 함수

function solution(n, k) {
  return n >= 10
    ? n * 12000 + (k - Math.floor(n / 10)) * 2000
    : n * 12000 + k * 2000;
}
