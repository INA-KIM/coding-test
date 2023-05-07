function solution(strlist) {
  let answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}

// function solution(strlist) {
//     return strlist.map((el) => el.length)
// } 한줄로 정리가능
