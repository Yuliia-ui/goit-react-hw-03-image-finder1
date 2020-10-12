import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => (
  <ul className={styles.ImageGallery}>
    {images.map(item => (
      <ImageGalleryItem
        key={item.id}
        id={item.id}
        alt={item.tags}
        src={item.webformatURL}
        onClickLargeImg={onClick}
        largeImageURL={item.largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
