// 1. Write a program to display the message "Hello World" 5 times
// in your browser using for loop.

// let message = "Hello World"
// let ul = document.querySelector('ul')

// for(let i = 1; i <= 5; i++){
//     ul.innerHTML += `<li>${message} ${i}</li>`
// }
    

// 2. Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.

// let number = +prompt('Enter Your Table Number');
// let length = +prompt('How many Times Do you want?');

// for(let number = length; number <= length; number++){
//     for(let j = 1; j <= length; j++){
//     console.log(`${number} x ${j} = ${number*j}`);
//     }
// }

// 4. You have an array
// A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
// Write each element on new line with the help of for loop

// let MobileName = ['Nokia', 'Oppo', 'Samsung', 'Tecno']
// let ul = document.querySelector('ul')

// for (let i = 0; i < MobileName.length; i++){
//     ul.innerHTML += `<li>${MobileName[i]}</li>`
// }

// 5.Write a program to print items of the following array using for
// loop:

// fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

// let ul = document.querySelector('#orderlist');
// let para = document.querySelector('#orderlist')

// for (let i = 0; i < fruits.length; i++) {
//     ul.innerHTML += `<li>Element at index ${i} ${fruits[i]}</li>`
// }

// 6. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.

// let head = document.querySelector(".head");
// let paragraph = document.querySelector(".para");
// // let uservalue = +prompt('Enter Your Number');
// // head.innerHTML = `Enter Your ${uservalue}`
// let items = prompt('Enter Item Your Number')

// for(let i = 0; i < items; i++){
//     paragraph.innerHTML = `<li>Your Item Number ${items}</li>`
// }

// not complete xxxxxxxxxxxxxxxxxxxxxx

// 7. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// let h1 = document.querySelector('h1')
// let h2 = document.querySelector('h2')
// let h3 = document.querySelector('h3')
// let h4 = document.querySelector('h4')
// let h5 = document.querySelector('h5')

// // == conting ==

// // console.log(Conting);
// for (let i = 1; i <= 10; i++) {
//     h1.innerHTML += `${i},`
// }

// // console.log(Reverseconting);
// for(let i = 10; i >= 1; i--){
//     h2.innerHTML += `${i},`
// }

// // console.log(Even);
// for(let i = 2; i <= 20; i += 2){
//     h3.innerHTML += `${i},`
// }

// // console.log(Odd);
// for (let i = 3; i <= 20; i += 3){
//     h4.innerHTML += `${i},`
// }

// // console.log(Series);
// for(let i = 2; i <= 20; i += 2){
//     h5.innerHTML += `${i + 'k,'}` 
// }


// 8. You have an array
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable "search by user input" in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt('Enter Your Items Name');
// let isAvailable = false

// for(let i = 0; i < bakery.length; i++){
//     if(userInput === bakery[i]){
//         console.log('Its Available')
//         isAvailable = true
//     }
// }
// if (!isAvailable){
//     console.log('Its Not Available');
// }

// 9. Write a program to identify the largest number in the given
// array.
// A = [24, 53, 78, 91, 12]

// let largestNum = [24, 53, 78, 91, 12];
// console.log(largestNum.sort(''));

// not complete

// 12. Write a program to print multiples of 5 ranging 1 to 100

// for (let i = 5; i < 100; i += 5){
//     console.log(i);
// }

// 13. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];


// let table = document.querySelector('#table')
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];


// for(let i = 0; i < students.length; i++){
//     table.innerHTML += `<table>
//     <tr>
//     <th>Student</th>
//     <th>Scores</th>
//     </tr>
//     <td>${students[i]}</td>
//     <td>${scores[i]}</td>
//     </table>`
// }