function add(x) {
    var i = x;
    function sum(y) {
        return i + y;
    }
    return sum;
}

console.log(add(2)(3)); 