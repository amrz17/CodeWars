export class Challenge {
  static solution(number: number) {
    if (number < 0) {
      return 0;
    }

    let sum = 0;

    for (let i = 0; i <= number - 1; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        // Jika ya, tambahkan i ke dalam sum
        sum += i;
      }
    }
    return sum;
  }
}
