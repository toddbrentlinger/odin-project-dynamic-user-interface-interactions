import BaseComponent from './baseComponent';
import { createElement } from './utilities';

export default class SideNavComponent extends BaseComponent {
    render() {
        if (!this._element) {
            this._element = createElement('nav', { id: 'sidenav' });
        }

        const sidenavContent = this._element.appendChild(
            createElement('div', { id: 'sidenav-content' })
        );

        // Dropdown Menu
        sidenavContent.appendChild(
            createElement('a', { href: '' }, 'Dropdown Menu')
        );

        // Mobile Menu
        sidenavContent.appendChild(
            createElement('a', { href: '' }, 'Mobile Menu')
        );

        // Image Slider
        sidenavContent.appendChild(
            createElement('a', { href: '' }, 'Image Slider')
        );

        return this._element;
    }
}
