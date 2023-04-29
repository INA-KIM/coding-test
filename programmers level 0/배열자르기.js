function solution(numbers, num1, num2) {
  var answer = [];
  answer = numbers.slice(num1, num2 + 1);
  return answer;
}

//slice(a,b) 인덱스[a]번째부터 b번째까지 자르기
