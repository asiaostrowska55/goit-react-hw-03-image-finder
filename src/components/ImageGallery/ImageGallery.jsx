import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const API_KEY = '33257268-27ad9fcecc17d6e2546f4b9dc';
    let page = 1;
    let per_page = 12;
    return (
      <ul className={css.gallery}>{/* <!-- Zbiór <li> z obrazami --> */}</ul>
    );
  }
}
