import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.gallery}>{/* <!-- Zbiór <li> z obrazami --> */}</ul>
    );
  }
}
