import {renderHome} from './Modules/home'
import {renderHeader} from './Modules/header'

const content = document.querySelector('#content');

// render the contents of the homepage
content.appendChild(renderHome());

// render the restaurant name in the header
content.appendChild(renderHeader());