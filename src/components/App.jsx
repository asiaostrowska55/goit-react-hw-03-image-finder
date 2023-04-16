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
  perPage: PER_PAGE,
  largeImage: '',
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

    setTimeout(async () => {
      this.setState({ isLoading: false });
    }, 700);
  }
  getImages = async (query, page) => {
    this.setState({ isLoading: true });
    const response = await fetchGalleryImage(query, page);

    if (response.totalHits > 0) {
      let images = [];
      response.hits.forEach(image => {
        images.push({
          id: image.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
          tags: image.tags,
        });
      });

      let totalPages = Math.ceil(response.totalHits / PER_PAGE);

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
    this.setState({ isModal: true, largeImage: largeImage });
  };
  closeModal = () => {
    this.setState({ isModal: false, largeImage: '' });
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
        <Searchbar getImages={this.getImages} query={query} page={page} />
        {isLoading && <Loader />}
        <ImageGallery images={images} openModal={this.openModal} />
        {isModal && (
          <Modal closeModal={this.closeModal} largeImage={largeImage} />
        )}
        {totalHits > 0 && page < allPages && page !== allPages && (
          <Button page={page} onClick={next => this.getImages(query, next)} />
        )}
      </div>
    );
  }
}
