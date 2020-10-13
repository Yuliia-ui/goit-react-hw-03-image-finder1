import React, { Component } from 'react';
import imageApi from './services/imageApi';
import Searchbar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    openModal: false,
    originalImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg();
    }
  }

  onChangeQuery = query => {
    if (query !== this.state.searchQuery) {
      this.setState({ searchQuery: query, currentPage: 1, images: [] });
    }
  };

  fetchImg = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });
    imageApi.fetchImageWithQuery(searchQuery, currentPage).then(hits => {
      if (hits.length === 0) {
        return alert('По вашему запросу ничего не найдено');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        currentPage: prevState.currentPage + 1,
        isLoading: false,
      }));
    });
  };

  handleClickImage = largeImage => {
    this.openModal(largeImage);
  };

  openModal = largeImage =>
    this.setState({ openModal: true, originalImageURL: largeImage });

  closeModal = () => this.setState({ openModal: false, originalImageURL: '' });

  render() {
    const { images, isLoading, openModal, originalImageURL } = this.state;
    const buttonIsShow = images.length > 0 && !isLoading;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} onClick={this.handleClickImage} />
        {openModal && (
          <Modal
            largeImage={originalImageURL}
            closeModal={this.closeModal}
          ></Modal>
        )}
        {isLoading && <Loader />}
        {buttonIsShow && <Button onClickLoad={this.fetchImg} />}
      </>
    );
  }
}
