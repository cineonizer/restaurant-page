const renderHome = () => {
    const home = document.createElement('div');
    home.classList.add('home-container');

    const homeImg = document.createElement('img');
    homeImg.src = 'images/home.jpg';
    homeImg.classList.add('home-image');
    home.appendChild(homeImg);

    const homeTxt = document.createElement('div');
    homeTxt.classList.add('home-text');
    homeTxt.innerText = 'Portrada restaurant is an intimate and personable ' +
    'experience in our top-level townhouse, where skylights permeate and ' +
    'fill up a close-knitted space with modern touches. \n\n Our menu is ' +
    'available for breakfast and lunch. There are two sessions, at 9AM ' +
    'and 12PM. Reservations are required.';
    home.appendChild(homeTxt);

    return home;
}

export {renderHome};