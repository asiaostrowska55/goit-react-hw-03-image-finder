import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
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

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleSubmit()

  getImage = async (query, page) => {
    this.setState({ isLoading: true})
    const response = await fetchGalleryImage(query, page)

    if(response.totalHits > 0){
      let images =[];
      response.hits.forEach(image => {
        images.push({
          id: images.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
          tags: image.tags,
        })
      });
      let totalPages = Math.ceil(response.data.totalHits / PER_PAGE)
    }
  }

  openModal = largeImage => {
    this.setState({isModal: true, largeImageURL: largeImage})
  }
  closeModal = () => {
    this.setState({isModal: false, largeImageURL: ''})
  }

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar />
        <ImageGallery/>
        <Loader />
        <Button />
        <Modal />
      </div>
    );
  }
}
export default App;
