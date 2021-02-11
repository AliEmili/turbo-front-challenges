const isVisible = (elem) => {

    let coords = elem.getBoundingClientRect();
    console.log(coords);
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
}

const main_section = document.querySelector('.main-section');
const layer2 = document.querySelector('.layer2');
const layer3 = document.querySelector('.layer3');
const layer4 = document.querySelector('.layer4');
const handleScroll = (main_section, ...elements) => {
    let windowHeight = document?.documentElement?.clientHeight;
    const main_section_bottom = main_section.getBoundingClientRect().bottom;
    let relates = [];
    elements.map((array) => {
        relates.push(Math.ceil((main_section_bottom * array[1]) / (windowHeight + main_section.clientHeight)));
    });
    if (isVisible(main_section)) {
        elements.map((layers, index) => {
            layers[0].style.transform = `translate(${relates[index]*-1}px)`
        })
    }
}

document.addEventListener('scroll', () => {handleScroll(main_section, [layer2, -50], [layer3, 150], [layer4, 70])});
