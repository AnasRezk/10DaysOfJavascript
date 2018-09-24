/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    if (a >= 1 && a <= 100 && b >= 1 && b <= 100) {
        this.length = a;
        this.width = b;
        this.perimeter = 2 * (a + b);
        this.area = a * b;
    }
}