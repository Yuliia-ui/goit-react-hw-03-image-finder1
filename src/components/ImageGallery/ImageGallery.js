import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ gallery }) => (
  <ul className={styles.ImageGallery}>
    {gallery.map(elem => (
      <ImageGalleryItem
        key={elem.id}
        id={elem.id}
        galleryItem={elem.largeImage}
      />
    ))}
  </ul>
);

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
