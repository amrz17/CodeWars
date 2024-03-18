export function countBits(n: number): number {
  // Mengonversi bilangan bulat ke representasi biner
  const binaryString = n.toString(2);

  // Menghitung jumlah bit 1 dalam representasi biner
  let count = 0;
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "1") {
      count++;
    }
  }

  return count;
}
