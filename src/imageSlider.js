import BaseComponent from './baseComponent.js';

export default class ImageSlider extends BaseComponent {
    render() {
        if (!this._element) {
            this._element = document.createElement('div', {id: 'image-slider'});
        }

        this._element.textContent = 'Image Slider Component!';

        return this._element;
    }
}