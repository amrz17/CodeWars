function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 == null || a2 == null || a1.length !== a2.length) {
    return false;
  }
  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] * a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
}

export default comp;
