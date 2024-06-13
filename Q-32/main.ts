// Question No.32

// Array to store existing usernames 
let existingUsernames: string[] = ['Ayesha', 'Fariha', 'Nida', 'Hira'];

function isUsernameUnique(newUsername: string): boolean {
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

// Usage:
let username1: string = 'ayesha';
let username2: string = 'fariha';
let username3: string = 'shiza';

console.log(`Is ${username1} unique? ${isUsernameUnique(username1)}`);
console.log(`Is ${username2} unique? ${isUsernameUnique(username2)}`);
console.log(`Is ${username3} unique? ${isUsernameUnique(username3)}`);
