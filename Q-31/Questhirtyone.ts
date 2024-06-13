// Question # 31

let users: string[] = [];

if (users.length === 0) {
    console.log("No Users: Ensure your user list isn’t empty.");
} else {
    for (let user of users) {
        console.log(`Hello, ${user}!`);
    }
}
