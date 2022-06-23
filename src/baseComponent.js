'use strict';
import { createElement } from './utilities.js';

export default class BaseComponent {
    constructor() {
        this._element = null;
    }

    get element() {
        return this._element;
    }

    render() {
        if (!this._element) {
            this._element = document.createElement('div');
        }

        this._element.appendChild(
            createElement('h1', {}, 'Base Component!')
        );

        return this._element;
    }
}