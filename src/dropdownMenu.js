import BaseComponent from './baseComponent.js';
import { createElement } from './utilities.js';
import './dropdownMenu.scss';

class Dropdown extends BaseComponent {
    constructor(props) {
        super(props);
        this._dropdownElement = null;
        this._dropdownListElement = null;
    }

    close() {

    }

    render() {
        this.initializeRender(createElement('span', {'class': 'dropdown-container'}));

        // Top Level
        const dropdownTopElement = createElement('span', {'class': 'dropdown-top'}, itemObj.name);
        this._element.appendChild(dropdownTopElement);

        // Dropdown
        if (!itemObj.hasOwnProperty('dropdownContent') || !Array.isArray(itemObj.dropdownContent)) {
            return this._element;
        }

        const dropdownElement = this._element.appendChild(createElement('div', {'class': 'dropdown'}));
        const dropdownListElement = dropdownElement.appendChild(document.createElement('ul'));

        this._element.addEventListener('click', e => {
            this._handleDropdownTopClick(e, dropdownElement, dropdownListElement);
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

        return this._element;
    }
}

export default class DropdownMenu extends BaseComponent {
    constructor(props) {
        super(props);
        this._dropdownElements = [];
    }

    _closeAllDropdowns(...dropdownContentElementsToIgnore) {
        for (let i = 0; i < this._dropdownElements.length; i++) {
            const dropdownContentElement = this._dropdownElements[i];

            if (dropdownContentElementsToIgnore.includes(dropdownContentElement)) continue;

            dropdownContentElement.style.height = 0;
        }
    }

    _handleDropdownTopClick(e, dropdownContainer, dropdownContentElement, dropdownListElement) {
        e.preventDefault();

        this._closeAllDropdowns(dropdownContentElement);

        if (dropdownContentElement.offsetHeight > 0) {
            dropdownContentElement.style.height = 0;
            //dropdownContainer.classList.remove('open');
        } else {
            dropdownContentElement.style.height = `${dropdownListElement.offsetHeight}px`;
            //dropdownContainer.classList.add('open');
        }
    }

    render() {
        this.initializeRender(createElement('nav', {'class': 'dropdown-menu'}));

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
                
                // Top Level
                const dropdownTopElement = createElement('span', {'class': 'dropdown-top'}, itemObj.name);
                dropdownContainer.appendChild(dropdownTopElement);

                // Dropdown
                if (!itemObj.hasOwnProperty('dropdownContent') || !Array.isArray(itemObj.dropdownContent)) {
                    continue;
                }

                const dropdownElement = dropdownContainer.appendChild(createElement('div', {'class': 'dropdown'}));
                const dropdownContentElement = dropdownElement.appendChild(createElement('div', {'class': 'dropdown-content'}));
                const dropdownListElement = dropdownContentElement.appendChild(document.createElement('ul'));

                dropdownContainer.addEventListener('click', e => {
                    this._handleDropdownTopClick(e, dropdownContainer, dropdownContentElement, dropdownListElement);
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

                this._dropdownElements.push(dropdownContentElement);
            }
        }

        return this._element;
    }
}