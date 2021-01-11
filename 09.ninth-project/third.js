const remove_useless = (array) => {
    return array.filter((item) => {
        return !!item;
    })
}

const count_most_repeatitive = (array) => {
    let max_repeated = -Infinity;
    let max_element;
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = i + 1; j < array.length - 1; j++) {
            if (array[i] === array[j]) {
                count++;
            }
        }
        if (count > max_repeated) {
            max_repeated = count;
            max_element = array[i];
        }
    }
    return max_element;
}

(function main() {
    const first_array = [1, null, 3, 91, 'sabad', undefined, 1, 3, 3, null, false, false, 3, NaN];
    const second_array = [3, 1, 'sadass', 'badcomb', 'asdsgdcv', 5, NaN, undefined, undefined, undefined, false, false, null, 'badcomb', 5, 3, 1, 5, 5];
    const filtered_first_array = remove_useless(first_array);
    const filtered_second_array = remove_useless(second_array);
    const max_first_array = count_most_repeatitive(filtered_first_array);
    const max_second_array = count_most_repeatitive(filtered_second_array);
    console.log(`Most repeatitive element in first array is : ${max_first_array}`);
    console.log(`Most repeatitive element in second array is : ${max_second_array}`);
    const union = [...filtered_first_array, ...filtered_second_array];
    console.log('The union of two arrays is :\n' + union.join(', '));
})();