/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        const reverseN = s.split('').reverse().join('');
        console.log(reverseN);
    } catch (error) {
        // Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
        console.log(error.message);
        console.log(s);
    }
}