const btnRightElement = document.querySelector(`.btn-right`);
const btnLeftElement = document.querySelector(`.btn-left`);
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let index = 0;
const imgContainerEl = document.getElementById(`img-container`);

const imgCurrentElement = document.createElement(`img`);
imgCurrentElement.src = images[0].image;
imgCurrentElement.classList.add(`img-current`);
imgContainerEl.append(imgCurrentElement);

const textContainerElement = document.createElement(`div`);
textContainerElement.classList.add(`text-container`);
imgContainerEl.append(textContainerElement);

const titleImgElement = document.createElement(`h3`);
titleImgElement.innerText = images[0].title;
textContainerElement.append(titleImgElement);

const textImgElement = document.createElement(`div`);
textImgElement.innerText = images[0].text;
textContainerElement.append(textImgElement);

const imgPreviewEl = document.createElement(`div`);
imgPreviewEl.classList.add(`img-preview`);
imgContainerEl.append(imgPreviewEl);


for (let key in images) {
    const imgElement = document.createElement(`img`);
    imgElement.classList.add(`img`);
    imgElement.src = images[key].image;
    imgPreviewEl.append(imgElement);

};


btnRightElement.addEventListener(`click`, function(){
    if (index == images.length - 1) {
        index = 0;

    } else {
        index++;

    };

    imgCurrentElement.src = images[index].image;
    titleImgElement.innerText = images[index].title;
    textImgElement.innerText = images[index].text;

});


btnLeftElement.addEventListener(`click`, function(){
    if (index == 0) {
        index = images.length - 1;

    } else {
        index--;

    };

    imgCurrentElement.src = images[index].image;
    titleImgElement.innerText = images[index].title;
    textImgElement.innerText = images[index].text;
    
});