import BaseComponent from './baseComponent.js';
import { createElement } from './utilities.js';
import './dropdownMenu.scss';

export default class DropdownMenu extends BaseComponent {
    constructor(props) {
        super(props);
        this._dropdownElements = [];
    }

    _closeAllDropdowns(...dropdownElementsToIgnore) {
        for (let i = 0; i < this._dropdownElements.length; i++) {
            const dropdownElement = this._dropdownElements[i];
            if (dropdownElementsToIgnore.includes(dropdownElement)) continue;
            dropdownElement.classList.remove('open');
        }
    }

    _handleDropdownTopClick(e, dropdownElement) {
        e.preventDefault();
        this._closeAllDropdowns(dropdownElement);
        dropdownElement.classList.toggle('open');
    }

    render() {
        this.initializeRender(createElement('div', {'class': 'dropdown-menu'}));

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

        if (this._props.hasOwnProperty('content') && Array.isArray(this._props.content)) {
            for (let i = 0; i < this._props.content.length; i++) {
                const itemObj = this._props.content[i];

                if (!itemObj.hasOwnProperty('name')) continue;

                const dropdownContainer = this._element.appendChild(createElement('span', {'class': 'dropdown-container'}));
                this._dropdownElements.push(dropdownContainer);

                // Top Level
                const dropdownTopElement = createElement('span', {'class': 'dropdown-top'}, itemObj.name);
                dropdownContainer.appendChild(dropdownTopElement);

                // Dropdown
                if (!itemObj.hasOwnProperty('dropdownContent') || !Array.isArray(itemObj.dropdownContent)) {
                    continue;
                }

                const dropdownElement = dropdownContainer.appendChild(createElement('div', {'class': 'dropdown'}));
                const dropdownListElement = dropdownElement.appendChild(document.createElement('ul'));

                dropdownContainer.addEventListener('click', e => {
                    this._handleDropdownTopClick(e, dropdownContainer);
                }, false);

                for (let j = 0; j < itemObj.dropdownContent.length; j++) {
                    const dropdownObj = itemObj.dropdownContent[j];

                    if (!dropdownObj.hasOwnProperty('name')) continue;

                    dropdownListElement.appendChild(
                        createElement('li', {}, 
                            createElement('a', {href: dropdownObj.href||''}, dropdownObj.name)
                        )
                    );
                }
            }
        }

        return this._element;
    }
}