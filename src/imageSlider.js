import BaseComponent from './baseComponent.js';
import { createElement } from './utilities.js';
import './imageSlider.scss';

class Image extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        this.initializeRender(document.createElement('img'));

        for (const [key, value] of Object.entries(this.props)) {
            this._element.setAttribute(key, value)
        }

        return this._element;
    }
}

export default class ImageSlider extends BaseComponent {
    constructor(props) {
        super(props);
        this.images = this.props.images.map(imageProps => new Image(imageProps));
    }

    render() {
        this.initializeRender(createElement('div', {'class': 'img-slider'}));

        // Image Gallery Container
        const imgGalleryContainer = this._element.appendChild(
            createElement('div', {'class': 'img-gallery-container'})
        );

        // Image Gallery Container List
        const imgGalleryContainerList = imgGalleryContainer.appendChild(
            document.createElement('ul')
        );

        // Image Gallery
        this.images.forEach(image => {
            imgGalleryContainerList.appendChild(
                createElement('li', {}, image.render())
            );
        });

        return this._element;
    }
}