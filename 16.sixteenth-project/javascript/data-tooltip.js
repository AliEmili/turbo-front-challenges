const hoverHandler = () => {
    let data = event.target.dataset.tooltip;
    let tooltip = document.querySelector('.tooltip');
    if(!data){
        tooltip.hidden = true;
    }else {
        tooltip.innerHTML = data;
        tooltip.hidden = false;
    }

}
document.addEventListener('mousemove', hoverHandler);