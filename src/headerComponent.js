import BaseComponent from './baseComponent.js';
import { createElement } from './utilities.js';

export default class HeaderComponent extends BaseComponent {
    render() {
        if (!this._element) {
            this._element = document.createElement('header');
        }

        this._element.appendChild(
            createElement('h1', {}, 'Dynamic User Interface Interactions')
        );

        return this._element;
    }
}