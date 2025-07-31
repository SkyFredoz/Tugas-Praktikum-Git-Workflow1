console.log("Hello, world!");

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    console.log("Pembagian dengan nol tidak diperbolehkan.");
    return null;
  }
  return a / b;
}

function pangkat(a, b) {
  return Math.pow(a, b);
}

function akar(a) {
  if (a < 0) {
    console.log("Akar dari bilangan negatif tidak didefinisikan.");
    return null;
  }
  return Math.sqrt(a);
}

console.log("Hasil 2 + 3 =", tambah(2, 3));
console.log("Hasil 5 - 2 =", kurang(5, 2));
console.log("Hasil 4 * 3 =", kali(4, 3));
console.log("Hasil 10 / 2 =", bagi(10, 2));
console.log("Hasil 2 ^ 3 =", pangkat(2, 3));
console.log("Akar dari 16 =", akar(16));
