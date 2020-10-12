import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  src,
  largeImageURL,
  tags,
  onClickLargeImg,
}) => {
  const handleClick = event => onClickLargeImg(event.target.dataset.source);

  return (
    <li className={styles.imageGalleryItem}>
      <img
        src={src}
        alt={tags}
        className={styles.imageGallery}
        data-source={largeImageURL}
        data-id={id}
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number,
  tags: PropTypes.string,
  onClickLargeImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
