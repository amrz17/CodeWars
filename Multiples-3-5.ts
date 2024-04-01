export default class Challenge {
  static solution(number: number) {
    if (number < 0) {
      return 0;
    }

    let sum = 0;

    for (let i = 0; i <= number - 1; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
    return sum;
  }
}
