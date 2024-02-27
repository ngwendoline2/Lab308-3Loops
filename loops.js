// // Part 1: Fizz & Buzz
// for (let num = 1; num <= 100; num++) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("Fizz Buzz");
//     } else if (num % 3 === 0) {
//         console.log("Fizz");
//     } else if (num % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(num);
//     }
// }

// const result = Array.from({ length: 100 }, (_, index) => {
//     const num = index + 1;
//     return (num % 3 === 0 && num % 5 === 0) ? "Fizz Buzz" :
//            (num % 3 === 0) ? "Fizz" :
//            (num % 5 === 0) ? "Buzz" :
//            num.toString();
// });

// console.log(result.join('\n'));

// //Part 2: prime Time

// function isPrime(number) {
//     if (number <= 1) return false;
//     if (number <= 3) return true;

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function findNextPrime(n) {
//     while (true) {
//         if (isPrime(n)) {
//             console.log(`Next prime number: ${n}`);
//             break;
//         }
//         n++;
//     }
// }

// // Example: Find the next prime number starting from 20
// findNextPrime(20);

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function findNextPrime(n) {
    while (true) {
        if (isPrime(n)) {
            console.log(`Next prime number starting from ${n}: ${n}`);
            break;
        }
        n++;
    }
}

//Results
//Next prime number starting from 5: 5
//Next prime number starting from 5: 5
//Next prime number starting from 11: 11
//Next prime number starting from 23: 23

// // Test the script with different values of n
// findNextPrime(4); // Expected output: 5
// findNextPrime(5); // Expected output: 7
// findNextPrime(9); // Expected output: 11
// findNextPrime(20); // You can test with higher numbers

// // Verify results with an online prime number table for accuracy

// Part 3: Feeling Loopy

const csvString = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";

// Split the CSV string into rows
const rows = csvString.split('\r\n');

// Loop through rows
for (const row of rows) {
  // Split each row into cells using the comma as a delimiter
  const cells = row.split(',');

  // Log each cell
  console.log(cells[0], cells[1], cells[2], cells[3]);
}

// Assumption
const CSVString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Split the CSV string into rows
const row = CSVStringString.split('\n');

// Loop through rows
for (const row of rows) {
  // Split each row into cells using the comma as a delimiter
  const cells = row.split(',');

  // Log each cell
  console.log(cells[0], cells[1], cells[2], cells[3]);
}


