import {renderHome} from './Modules/home'
import {renderHeader} from './Modules/header'
import {renderMenu} from './Modules/menu'
import {renderReserve} from './Modules/reserve'

const content = document.querySelector('#content');

content.appendChild(renderHeader());
content.appendChild(renderHome());

const tabs = document.querySelectorAll('div.header-nav > div');
tabs.forEach(tab => tab.addEventListener('click', (e) => {
    while (content.childNodes[1]) content.removeChild(content.childNodes[1]);
    if (e.target.textContent === 'HOME') return content.appendChild(renderHome());
    if (e.target.textContent === 'MENU') return content.appendChild(renderMenu());
    if (e.target.textContent === 'RESERVE') return content.appendChild(renderReserve());
}));