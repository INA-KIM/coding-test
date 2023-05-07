function solution(sides) {
  let [a, b, c] = sides;
  if (a + b > c && a + c > b && b + c > a) {
    return 1;
  } else {
    return 2;
  }
}
