import BaseComponent from './baseComponent';
import { createElement } from './utilities';
import './dropdownMenu.scss';

export default class DropdownMenu extends BaseComponent {
    constructor(props) {
        super(props);
        this._dropdownElements = [];
    }

    _closeAllDropdowns(...dropdownContentElementsToIgnore) {
        for (let i = 0; i < this._dropdownElements.length; i++) {
            const dropdownContentElement = this._dropdownElements[i];

            if (!dropdownContentElementsToIgnore.includes(dropdownContentElement)) {
                dropdownContentElement.style.height = 0;
            }
        }
    }

    _handleDropdownTopClick(e, dropdownContainer, dropdownContentElement, dropdownListElement) {
        e.preventDefault();

        this._closeAllDropdowns(dropdownContentElement);

        if (dropdownContentElement.offsetHeight > 0) {
            dropdownContentElement.style.height = 0;
        } else {
            dropdownContentElement.style.height = `${dropdownListElement.offsetHeight}px`;
        }
    }

    render() {
        this.initializeRender(createElement('nav', { class: 'dropdown-menu' }));

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

        if (Object.prototype.hasOwnProperty.call(this._props, 'content') && Array.isArray(this._props.content)) {
            for (let i = 0; i < this._props.content.length; i++) {
                const itemObj = this._props.content[i];

                if (!Object.prototype.hasOwnProperty.call(itemObj, 'name')) continue;

                const dropdownContainer = this._element.appendChild(createElement('span', { class: 'dropdown-container' }));

                // Top Level
                const dropdownTopElement = createElement('span', { class: 'dropdown-top' }, itemObj.name);
                dropdownContainer.appendChild(dropdownTopElement);

                // Dropdown
                if (!Object.prototype.hasOwnProperty.call(itemObj, 'dropdownContent') || !Array.isArray(itemObj.dropdownContent)) {
                    continue;
                }

                const dropdownElement = dropdownContainer.appendChild(createElement('div', { class: 'dropdown' }));
                const dropdownContentElement = dropdownElement.appendChild(createElement('div', { class: 'dropdown-content' }));
                const dropdownListElement = dropdownContentElement.appendChild(document.createElement('ul'));

                dropdownContainer.addEventListener('click', (e) => {
                    this._handleDropdownTopClick(
                        e,
                        dropdownContainer,
                        dropdownContentElement,
                        dropdownListElement
                    );
                }, false);

                for (let j = 0; j < itemObj.dropdownContent.length; j++) {
                    const dropdownObj = itemObj.dropdownContent[j];

                    if (!Object.prototype.hasOwnProperty.call(dropdownObj, 'name')) continue;

                    dropdownListElement.appendChild(
                        createElement(
                            'li',
                            {},
                            createElement('a', { href: dropdownObj.href || '' }, dropdownObj.name)
                        )
                    );
                }

                this._dropdownElements.push(dropdownContentElement);
            }
        }

        return this._element;
    }
}
