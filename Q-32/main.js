"use strict";
// Array to store existing usernames 
let existingUsernames = ['Ayesha', 'Fariha', 'Nida', 'Hira'];
function isUsernameUnique(newUsername) {
    // Convert newUsername to lowercase for case insensitivity
    let lowerNewUsername = newUsername.toLowerCase();
    // Check against existing usernames
    for (let username of existingUsernames) {
        if (lowerNewUsername === username.toLowerCase()) {
            return false; // Username already exists
        }
    }
    return true; // Username is unique
}
// Example usage:
let username1 = 'ayesha';
let username2 = 'fariha';
let username3 = 'shiza';
console.log(`Is ${username1} unique? ${isUsernameUnique(username1)}`);
console.log(`Is ${username2} unique? ${isUsernameUnique(username2)}`);
console.log(`Is ${username3} unique? ${isUsernameUnique(username3)}`);
