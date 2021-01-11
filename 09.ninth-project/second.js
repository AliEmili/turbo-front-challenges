let readln = require('readline');
let cl = readln.createInterface(process.stdin, process.stdout);

let question = function() {
    return new Promise((res, _) => {
        cl.on('line', answer => {
            res(answer);
        })
    });
};

const urlized = (url_phrase, array_element) => {
    const index = array_element.indexOf(url_phrase);
    const url = array_element.slice(index);
    return '<a href="' + url + '" class="text-link">' + url + '</a>';
}


(async function main() {
    console.log('Enter the string : ');
    const string = await question();
    // const string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut {{@labore}} et dolore https://developer.mozilla.org/ magna aliqua. Tellus mauris a diam maecenas sed enim ut sem. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eleifend mi in nulla posuere https://javascript.info/ sollicitudin aliquam ultrices sagittis orci. At volutpat diam ut venenatis tellus. Urna{{@porttitor}}rhoncus dolor purus non enim praesent elementum. In eu mi bibendum neque. Risus quis varius quam quisque id diam. Vitae https://scotch.io/tag/javascript sapien pellentesque habitant morbi tristique senectus. Nibh sit amet commodo nulla. Ut etiam sit amet nisl purus. Porttitor leo a {{@diam}} sollicitudin tempor id.';
    const array = string.split(' ');
    for (let i = 0; i < array.length; i++) {
        // these approach is to handle urls which is not separated from other texts by space like one of the test cases in example
        if (array[i].includes('http')) {
            array[i] = urlized('http', array[i]);
        } else if (array[i].includes('www')) {
            array[i] = urlized('www', array[i]);
        }
        if (array[i].includes('{{@')) {
            const first_brace_index = array[i].indexOf('{{@');
            const first_part = array[i].slice(0, first_brace_index);
            const id_to_end = array[i].slice(first_brace_index + 1);
            let last_index = id_to_end.indexOf('}');
            if (last_index === -1) {
                continue;
            }
            const last_part = id_to_end.slice(last_index + 2);
            const id = id_to_end.slice(2, last_index);
            array[i] = first_part + '<span class=text-user">' + id + '</span>' + last_part;
        }
    }
    const result = array.join(" ");
    console.log(result);
})();