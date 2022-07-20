import BaseComponent from './baseComponent';
import Image from './image';
import { createElement } from './utilities';
import './imageSlider.scss';

export default class ImageSlider extends BaseComponent {
    constructor(props) {
        super(props);
        this.images = this.props.images.map((imageProps) => new Image(imageProps));
        this._selectedIndex = 0;
    }

    get selectedIndex() {
        return this._selectedIndex;
    }

    set selectedIndex(newIndex) {
        if (newIndex < 0) {
            this._selectedIndex = this.images.length - 1;
        } else if (newIndex >= this.images.length) {
            this._selectedIndex = 0;
        } else {
            this._selectedIndex = newIndex;
        }
    }

    handleGalleryItemSelect(newSelectedIndex) {
        if (newSelectedIndex === this.selectedIndex) return;

        // Get direction of slide
        const direction = (newSelectedIndex < this.selectedIndex) ? 'right' : 'left';

        // Alter current selected gallery item
        const currSelectedGalleryItem = this.element.querySelector(`.img-slider-item[data-index="${this.selectedIndex}"]`);
        currSelectedGalleryItem.style.animationName = `slide-${direction}-from-in`;
        currSelectedGalleryItem.classList.remove('selected-gallery-item');

        // Alter current selected gallery counter item
        const currSelectedGalleryCounterItem = this.element.querySelector(`.gallery-counter-item[data-index="${this.selectedIndex}"]`);
        currSelectedGalleryCounterItem.classList.remove('selected-gallery-counter-item');

        this.selectedIndex = newSelectedIndex;

        // Alter new selected gallery item
        const newSelectedGalleryItem = this.element.querySelector(`.img-slider-item[data-index="${this.selectedIndex}"]`);
        newSelectedGalleryItem.style.animationName = `slide-${direction}-from-out`;
        newSelectedGalleryItem.classList.add('selected-gallery-item');

        // Alter new selected gallery counter item
        const newSelectedGalleryCounterItem = this.element.querySelector(`.gallery-counter-item[data-index="${this.selectedIndex}"]`);
        newSelectedGalleryCounterItem.classList.add('selected-gallery-counter-item');
    }

    handlePrevClick() {
        this.handleGalleryItemSelect(this.selectedIndex - 1);
    }

    handleNextClick() {
        this.handleGalleryItemSelect(this.selectedIndex + 1);
    }

    render() {
        this.initializeRender(createElement('div', { class: 'img-slider' }));

        // Slider Main
        const sliderMain = this._element.appendChild(
            createElement('div', { class: 'img-slider-main' })
        );

        // Slider Main - Gallery Next/Prev Buttons
        if (this.images.length > 1) {
            const prevBtn = createElement('div', { class: 'img-slider-prev' }, '\u003c');
            prevBtn.addEventListener('click', this.handlePrevClick.bind(this), false);

            const nextBtn = createElement('div', { class: 'img-slider-next' }, '\u003e');
            nextBtn.addEventListener('click', this.handleNextClick.bind(this), false);

            sliderMain.append(prevBtn, nextBtn);
        }

        // Slider Main - Image Gallery Container
        const imgGalleryContainer = sliderMain.appendChild(
            createElement('div', { class: 'img-slider-content' })
        );

        // Slider Footer
        const sliderFooter = this._element.appendChild(
            createElement('div', { class: 'img-slider-footer' })
        );

        // Slider Footer - Gallery Counter
        const galleryCounter = sliderFooter.appendChild(
            createElement('div', { class: 'img-slider-counter' })
        );

        // Gallery Items
        this.images.forEach((image, index) => {
            const imgSliderItem = createElement('div', { class: 'img-slider-item', 'data-index': index }, image.render());
            const galleryCounterItem = createElement('div', { class: 'gallery-counter-item', 'data-index': index });

            if (index === this.selectedIndex) {
                imgSliderItem.classList.add('selected-gallery-item');
                galleryCounterItem.classList.add('selected-gallery-counter-item');
            }

            // Add item to image gallery container
            imgGalleryContainer.appendChild(imgSliderItem);

            // Add item to gallery counter
            galleryCounterItem.addEventListener('click', () => {
                this.handleGalleryItemSelect(index);
            }, false);
            galleryCounter.appendChild(galleryCounterItem);
        });

        return this._element;
    }
}
