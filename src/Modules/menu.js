const renderMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu-container');

    const menuTxt = document.createElement('dl');
    menuTxt.classList.add('menu-text');
    menu.appendChild(menuTxt);

    menuTxt.appendChild(document.createElement('p1')).textContent = 'breakfast';

    createMenu(menuTxt, 'full english', 'bacon, pork sausage, egg, grilled portobello mushrooms, hash brown, tomato');
    createMenu(menuTxt, 'eggs benedict', 'two poached eggs, toasted english muffin, ham & hollandaise');
    createMenu(menuTxt, 'florentine', 'two poached eggs, toasted english muffin, spinach & hollandaise');
    createMenu(menuTxt, 'smoked haddock benedict', 'two poached eggs, toasted english muffin, haddock & hollandaise');
    createMenu(menuTxt, 'pan-fried chalkstream trout', 'celeriac dauphinoise, picked pear dressing');

    menuTxt.appendChild(document.createElement('p1')).textContent = 'lunch';

    createMenu(menuTxt, 'beef wellington', 'potato puree, glazed root vegetables, red wine demi-grace');
    createMenu(menuTxt, 'jidori chicken scallopini', 'roasted pee wee potatoes, artichokes, lacinato kale, truffle chicken jus');
    createMenu(menuTxt, 'crispy skin salmon', 'warm white beans, seabean salad, iberico chorizo, citrus beurre blanc');
    createMenu(menuTxt, 'filet mignon', '8 ounces santa carota beef, roasted tomatoes on the vine, bearnaise sauce');
    createMenu(menuTxt, 'prime dry aged new york strip', '12 ounces santa carota beef, glazed maitake mushrooms, shishito peppers');

    return menu;
}

const createMenu = (menuText, item, descr) => {
    const dataTerm = document.createElement('dt');
    dataTerm.textContent = item;
    menuText.appendChild(dataTerm);

    const dataDescr = document.createElement('dd');
    dataDescr.textContent = descr;
    menuText.appendChild(dataDescr);
}

export {renderMenu}