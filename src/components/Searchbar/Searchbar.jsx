import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const response = axios.get('https://pixabay.com/api/', {
      params: {
        key: '33257268-27ad9fcecc17d6e2546f4b9dc',
        q: search,
        image_type: 'photo',
        orientation: 'horizonatal',
        safesearch: true,
        per_page,
        page,
      },
    });
  };

  render() {
    const { imageSearch } = this.props;
    return (
      <header className={css.searchbar}>
        <form className={css.form}>
          <button type="submit" className={css.button} onSubmit={imageSearch}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
