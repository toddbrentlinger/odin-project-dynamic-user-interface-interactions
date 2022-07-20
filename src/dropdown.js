import BaseComponent from './baseComponent';
import { createElement } from './utilities';

export default class Dropdown extends BaseComponent {
    constructor(props) {
        super(props);
        this._dropdownElement = null;
        this._dropdownListElement = null;
    }

    render() {
        this.initializeRender(createElement('span', { class: 'dropdown-container' }));

        // Top Level
        const dropdownTopElement = createElement('span', { class: 'dropdown-top' }, itemObj.name);
        this._element.appendChild(dropdownTopElement);

        // Dropdown
        if (!itemObj.hasOwnProperty('dropdownContent') || !Array.isArray(itemObj.dropdownContent)) {
            return this._element;
        }

        const dropdownElement = this._element.appendChild(createElement('div', { class: 'dropdown' }));
        const dropdownListElement = dropdownElement.appendChild(document.createElement('ul'));

        this._element.addEventListener('click', (e) => {
            this._handleDropdownTopClick(e, dropdownElement, dropdownListElement);
        }, false);

        for (let j = 0; j < itemObj.dropdownContent.length; j++) {
            const dropdownObj = itemObj.dropdownContent[j];

            // if (!dropdownObj.hasOwnProperty('name')) continue;
            if (!Object.prototype.hasOwnProperty.call(dropdownObj, 'name')) continue;

            dropdownListElement.appendChild(
                createElement('li', {},
                    createElement('a', { href: dropdownObj.href || '' }, dropdownObj.name)
                )
            );
        }

        return this._element;
    }
}