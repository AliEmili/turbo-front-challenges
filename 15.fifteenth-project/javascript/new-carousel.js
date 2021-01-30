let current_pointer = 0;
const show_item = document.getElementsByClassName('show-item')[0];
const all_items = show_item.children;
const handleNext = () => {
    if (current_pointer < all_items.length - 3) {
        const width_of_first_element = all_items[current_pointer].offsetWidth;
        const current_margin = window.getComputedStyle(show_item).marginLeft;
        const indexOfP = current_margin.indexOf('p');
        const valueOfMargin = parseInt(current_margin.slice(0, indexOfP));
        show_item.style.marginLeft = `${valueOfMargin - width_of_first_element}px`
        current_pointer++;
    }
}
const handlePrev = () => {
    if (current_pointer > 0) {
        const width_of_last_element = all_items[current_pointer + 2].offsetWidth;
        const current_margin = window.getComputedStyle(show_item).marginLeft;
        const indexOfP = current_margin.indexOf('p');
        const valueOfMargin = parseInt(current_margin.slice(0, indexOfP));
        show_item.style.marginLeft = `${valueOfMargin + width_of_last_element}px`
        current_pointer--;
    }
}
const previous_handler = (times) => {
    for (let i = 1; i <= times; i++) {
        handlePrev()
    }
}
const next_handler = (times) => {
    for (let i = 0; i < times; i++) {
        handleNext()
    }
}
const prev_middle_handler = () => {
    while (current_pointer > 0) {
        handlePrev();
    }
}
const next_middle_handler = () => {
    while (current_pointer < all_items.length - 3) {
        handleNext();
    }
}
const switchHandler = (which, func, all_items_func) => {
    switch (which) {
        case 1:
            func(2);
            break;
        case 2:
            all_items_func();
            break;
    }
}
const nextMouseHandler = (e) => {
    switchHandler(e.which, next_handler, next_middle_handler);
}
const prevMouseHandler = (e) => {
    switchHandler(e.which, previous_handler, prev_middle_handler);
}
const prevbtn = document.getElementsByClassName('prevbtn')[0];
const nextbtn = document.getElementsByClassName('nextbtn')[0];
prevbtn.addEventListener('mousedown', prevMouseHandler);
nextbtn.addEventListener('mousedown', nextMouseHandler);