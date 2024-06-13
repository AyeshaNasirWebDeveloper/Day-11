function getOrdinalSuffix(number) {
    // Check for the exceptions (11, 12, 13)
    if (number % 100 >= 11 && number % 100 <= 13) {
        return number + 'th';
    }
    // Determine the suffix based on the last digit
    switch (number % 10) {
        case 1:
            return number + 'st';
        case 2:
            return number + 'nd';
        case 3:
            return number + 'rd';
        default:
            return number + 'th';
    }
}
// Loop through a range of numbers (e.g., 1 to 20)
for (let i = 1; i <= 20; i++) {
    console.log(getOrdinalSuffix(i));
}
export {};
