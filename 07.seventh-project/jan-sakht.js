let readln = require('readline');
let cl = readln.createInterface(process.stdin, process.stdout);

let question = function() {
    return new Promise((res, _) => {
        cl.on('line', answer => {
            res(answer);
        })
    });
};

const is_prime = (number) => {
    if (number === 2) {
        return true;
    } else if (number % 2 === 0 || number < 2) {
        return false;
    } else {
        for (let i = 2; i < number / 2 + 1; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

const jan_sakht = (number) => {
    while (parseInt(number) > 0) {
        if (is_prime(parseInt(number))) {
            number /= 10;
        } else {
            return false;
        }
    }
    return true;
}

(async function main() {
    console.log('Enter a number');
    let password = await question();
    password = parseInt(password);
    if (jan_sakht(password)) {
        console.log("YES");
    } else {
        console.log("NO");
    }



    cl.close();

})();