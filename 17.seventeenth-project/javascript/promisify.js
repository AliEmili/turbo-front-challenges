const addImage = (container, url) => {
    return new Promise((resolve, reject) => {
        try {
            const image = new Image();
            image.addEventListener('load', ()=>{
                resolve(image)
                container.append(image);
            });
            image.src = url;
            image.alt = "picture";
        }
        catch {
            reject('something is wrong');
        }
    })
}

const myDiv = document.querySelector('.myDiv');
addImage(myDiv, 'https://www.w3schools.com/tags/w3html.gif').then(()=>console.log('image loaded'));