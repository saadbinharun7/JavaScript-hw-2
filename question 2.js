//2.Write a function named checkLoginStatus that takes a boolean isLoggedIn.

function checkLoginStatus(isLoggedIn) {
    if (isLoggedIn) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}

let result = checkLoginStatus(true);
console.log(result);