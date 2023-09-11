// 1. Code Structure: Statement, semicolon, and comment

// Ini adalah komentar satu baris

/*
   Ini adalah komentar
   lebih dari satu baris
*/

// Ini adalah pernyataan
console.log("Hello, world!");

//2. Variabel 
var user = "rahul"
let age = "21"
const alamat = "Jl. ir sutami - probolinggo"
console.log(`Nama : ${user}\nUmur : ${age}\nAlamat : ${alamat}`)

//3. Tipe Data
// Tipe data primitif
let number = 42; // Number
console.log(number)

let text = "Hello"; // String
console.log(text)

let istrue = true; // Boolean
// kondisi boolean
if (istrue) {
  console.log("istrue adalah benar (true)");
} else {
  console.log("istrue adalah salah (false)");
}
let empty = null; // Null
console.log(empty)

let undefinedValue = undefined; // Undefined
console.log(undefinedValue)

//objek
let identitas = {
    email: "rahul.ratu662@gmail.com",
    github: "https://github.com/rahulil23/"
}

console.log(identitas)

// 4. Type Conversion: String, Boolean, and Number
let Str = "42";
alert(typeof Str);
let strToNum = Number(Str);
let boolAsString = "true";
let strToBool = Boolean(boolAsString);

//5. Operator
let a = 50
let b = 34
console.log(`a = ${a}\nb = ${b}`)
console.log(`a + b = ${a + b}`)
console.log(`a - b = ${a - b}`)
console.log(`a * b = ${a * b}`)
console.log(`a / b = ${a / b}`)
console.log(`a % b = ${a % b}`)
console.log(`a > b = ${a > b}`)


// 6. Popup Modal: Alert, confirm, and prompt

// Alert
alert("Ini adalah pesan alert!");

// Confirm
let userAgrees = confirm("Apakah Anda setuju?");
if (userAgrees) {
  console.log("Pengguna setuju.");
} else {
  console.log("Pengguna tidak setuju.");
}

// Prompt
let userName = prompt("Masukkan nama Anda:", "John");
console.log("Halo, " + userName + "!");


// 7. type conversion & function
let angka = 10
console.log(`Datawal Angka : ${angka}`)

function conv(num) {
    console.log(`Angka -> String : ${String(num)}`)
    console.log(`Angka -> Boolean : ${Boolean(num)}`)
}

conv(angka)

// 8. Loops: For, Do While, and While

// For loop
for (let i = 0; i < 3; i++) {
    console.log("Iterasi for ke-" + i);
  }
  
  // While loop
  let j = 0;
  while (j < 6) {
    console.log("Iterasi while ke-" + j);
    j++;
  }
  
  // Do-while loop
  let k = 0;
  do {
    console.log("Iterasi do while ke-" + k);
    k++;
  } while (k < 2);

// 9. Functions: Basic, expression, and arrow function

// Deklarasi fungsi
function greet(name) {
    console.log("Halo, " + name + "!");
  }
  
  // Pemanggilan fungsi
  greet("Alice");
  
  // Fungsi ekspresi
  const add = function (a, b) {
    return a + b;
  };
  
  console.log(add(3, 5)); // Output: 8
  
  // Arrow function
  const multiply = (x, y) => x * y;
  
  console.log(multiply(4, 6)); // Output: 24