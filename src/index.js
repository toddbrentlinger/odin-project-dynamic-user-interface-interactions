import DropdownMenu from './dropdownMenu.js';
import MobileMenu from './mobileMenu.js';
import ImageSlider from './imageSlider.js';
import HeaderComponent from './headerComponent.js';
import SideNavComponent from './sideNavComponent.js';
import FooterComponent from './footerComponent.js';

import { createElement } from './utilities.js';

import './meyerReset.scss';
import './styles.scss';

function component() {
    const element = createElement('div', {id: 'content'});

    element.appendChild(
        (new HeaderComponent()).render()
    );

    element.appendChild(
        (new SideNavComponent()).render()
    );

    const mainElement = element.appendChild(
        document.createElement('main')
    );

    // Dropdown Menu
    mainElement.append(
        createElement('h2', {}, 'Dropdown Menu:'),
        (new DropdownMenu()).render()
    );

    // Mobile Menu
    mainElement.append(
        createElement('h2', {}, 'Mobile Menu:'),
        (new MobileMenu()).render()
    );

    // Image Slider
    mainElement.append(
        createElement('h2', {}, 'Image Slider:'),
        (new ImageSlider()).render()
    );

    // Footer
    element.appendChild(
        (new FooterComponent(2022)).render()
    );

    return element;
}

document.body.appendChild(component());