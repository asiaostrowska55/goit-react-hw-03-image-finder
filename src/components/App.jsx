import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGalleryItems/ImageGalleryItem';
import ImageGalleryItem from './ImageGallery/ImageGallery';
import Loader from './ImageGallery/ImageGallery';
import Button from './ImageGallery/ImageGallery';
import Modal from './ImageGallery/ImageGallery';

export const App = () => {
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
      <ImageGallery />
      <ImageGalleryItem />
      <Loader />
      <Button />
      <Modal />
    </div>
  );
};
