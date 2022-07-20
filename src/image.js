import BaseComponent from './baseComponent';

export default class Image extends BaseComponent {
    render() {
        this.initializeRender(document.createElement('img'));

        Object.entries(this.props).forEach(([key, value]) => {
            this._element.setAttribute(key, value);
        });

        return this._element;
    }
}
