import BaseComponent from './baseComponent.js';

export default class DropdownMenu extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        if (!this._element) {
            this._element = document.createElement('div', {id: 'dropdown-menu'});
        }

        this._element.textContent = 'Dropdown Menu Component!';

        return this._element;
    }
}