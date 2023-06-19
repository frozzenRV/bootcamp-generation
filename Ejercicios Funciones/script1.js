function numeroMayor(a, b, c) {
    if (a == b && a == c) {
        console.log(a)
    }
    else if (a == b && a < c) {
        console.log(c)
    }
    else if (a == b && a > c) {
        console.log(a)
    }
    else if (a == c && a < b) {
        console.log(b)
    }
    else if (a == c && a > b) {
        console.log(a)
    }
    else if (b == c && a < b) {
        console.log(b)
    }
    else if (b == c && a > b) {
        console.log(a)
    }
    else if (a > b && a > c) {
        console.log(a)
    }
    else if (b > a && b > c) {
        console.log(b)
    }
    else if (c > a && c > a) {
        console.log(c)
    }
}

numeroMayor(50, 2, 50)