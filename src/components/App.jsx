import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItems/ImageGalleryItem';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
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
        {/* <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>

        <Loader />
        <Button />
        <Modal /> */}
      </div>
    );
  }
}
