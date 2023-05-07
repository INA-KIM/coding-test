function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

//.sort() 는 문자열로 정렬시키고 숫자로 정렬시키고 싶으면 .sort((a,b)=>a-b) 써야한다
