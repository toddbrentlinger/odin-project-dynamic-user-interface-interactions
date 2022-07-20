import BaseComponent from './baseComponent';

export default class MobileMenu extends BaseComponent {
    render() {
        if (!this._element) {
            this._element = document.createElement('div', { id: 'mobile-menu' });
        }

        this._element.textContent = 'Mobile Menu Component!';

        return this._element;
    }
}
