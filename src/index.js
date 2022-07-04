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
    const props = {content: []};
    for (let i = 0; i < 3; i++) {
        const numDropdownItems = 1 + (Math.random() * 4);
        let dropdownContent = [];
        for (let j = 0; j < numDropdownItems; j++) {
            dropdownContent.push({
                name: `Sub Nav ${i + 1}-${j + 1}`,
                href: ''
            });
        }

        props.content.push({
            dropdownContent,
            name: `Nav ${i + 1}`,
            href: null,
        });
    }
    /*
    props = {
        content: [
            {
                name: 'Nav 1',
                href: null,
                dropdownContent: [
                    {
                        name: 'Sub Nav 1-1',
                        href: ''
                    },
                    {
                        name: 'Sub Nav 1-2',
                        href: ''
                    },
                    {
                        name: 'Sub Nav 1-3',
                        href: ''
                    }
                ]
            }
        ]
    };
    */
    mainElement.append(
        createElement('h2', {}, 'Dropdown Menu:'),
        (new DropdownMenu(props)).render()
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