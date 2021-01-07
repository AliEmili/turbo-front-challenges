const data = require('./data');

var array = []

const checkKeys = (data) => {
    for (let key in data) {
        if (typeof data[key] === 'object' && data[key] !== null) {
            shallowCopy = {...data[key] };
            array.push(key);
            checkKeys(shallowCopy);
        } else if (data[key] === null || typeof data[key] === 'undefined') {
            array.push(key);
            console.log(array.join(' '));
            array.pop();
        }
    }
    array.pop();
}

checkKeys(data);