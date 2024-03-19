String.prototype.toJadenCase = function () {
  // Membagi string menjadi array kata
  const words = this.split(" ");
  // Mengonversi huruf pertama setiap kata menjadi huruf kapital
  const jadenCaseWords = words.map(
    (word) => word[0].toUpperCase() + word.substring(1),
  );
  // Menggabungkan kembali array kata menjadi string
  return jadenCaseWords.join(" ");
};
interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}
