let readln = require('readline');
let cl = readln.createInterface(process.stdin, process.stdout);

let question = function() {
    return new Promise((res, _) => {
        cl.on('line', answer => {
            res(answer);
        })
    });
};


(async function main() {
    console.log('Enter the main string : ');
    let main_string = await question();
    console.log('Enter the substring : ');
    let substring = await question();
    main_string += main_string
    if (main_string.includes(substring)) {
        console.log('Found');
    } else {
        console.log('Not Found');
    }

    cl.close();

})();