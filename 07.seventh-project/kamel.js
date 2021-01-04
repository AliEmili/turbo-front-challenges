let readln = require('readline');
let cl = readln.createInterface(process.stdin, process.stdout);

let question = function() {
    return new Promise((res, _) => {
        cl.on('line', answer => {
            res(answer);
        })
    });
};

const kamel = (number) => {
    if (number <= 2) {
        return false;
    } else {
        let sum = 1;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }
        if (sum === number) {
            return true;
        } else {
            return false;
        }

    }
}

(async function main() {
    console.log('Enter a number');
    let n = await question();
    n = parseInt(n);
    if (kamel(n)) {
        console.log("YES");
    } else {
        console.log("NO");
    }



    cl.close();

})();