/*6. Create a function printArrayInfo that takes an array and:

* Prints the array
* Prints every items by index */

function printArrayInfo(arr) {

    console.log("Array:", arr);

    for(let i = 0; i < arr.length; i++) {

        console.log(arr[i]);
    }
}

let arr = ["apple", "banana", "orange", "grape", "mango"];
printArrayInfo(arr);