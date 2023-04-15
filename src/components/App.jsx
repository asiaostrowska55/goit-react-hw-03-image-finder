import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { fetchGalleryImage, PER_PAGE } from './api';

const INITIAL_STATE = {
  images: [],
  query: '',
  page: 1,
  largeImageURL: '',
  isLoading: false,
  isModal: false,
  totalHits: 0,
  isLastPage: false,
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetchGalleryImage(this.state.query);

    this.setState({ images: response.hits });
  }
  getImages = async (query, page) => {
    this.setState({ isLoading: true });
    const response = await fetchGalleryImage(query, page);

    if (response.totalHits > 0) {
      let images = [];
      response.hits.forEach(image => {
        images.push({
          id: images.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
          tags: image.tags,
        });
      });

      let totalPages = Math.ceil(response.data.totalHits / PER_PAGE);

      const previousImages = this.state.images;

      if (page > 1) {
        previousImages.forEach(photo => {
          images.forEach((image, array, index) => {
            if (photo.id === image.id) {
              array.splice(index, 1);
            }
          });
        });
      }

      this.setState(prevState => {
        let renderGallery = [];

        page > 1
          ? (renderGallery = [...prevState.images, images])
          : (renderGallery = [...images]);

        return {
          images: renderGallery,
          query,
          page,
          isLoading: false,
          totalHits: response.totalHits,
          totalPages,
        };
      });
    } else {
      this.setState({ ...INITIAL_STATE });
    }
  };

  openModal = largeImage => {
    this.setState({ isModal: true, largeImageURL: largeImage });
  };
  closeModal = () => {
    this.setState({ isModal: false, largeImageURL: '' });
  };

  render() {
    const {
      query,
      page,
      images,
      totalHits,
      totalPages,
      isLoading,
      largeImage,
      isModal,
    } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar getImages={value => this.getImages(value, 1)} />{' '}
        {isLoading && <Loader />}
        <ImageGallery images={images} openModal={this.openModal} />
        {totalHits > 0 && page < totalPages && (
          <Button
            loadMore={page}
            onClick={nextPage => this.getImages(nextPage, query)}
          />
        )}{' '}
        {isModal && (
          <Modal closeModal={this.closeModal} largeImage={largeImage} />
        )}
      </div>
    );
  }
}
