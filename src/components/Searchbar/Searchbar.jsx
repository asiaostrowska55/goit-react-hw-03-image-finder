import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    inputQuery: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    const { inputQuery } = this.state;

    this.props.getGallery(inputQuery);
  };

  render() {
    const { imageSearch } = this.state;
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
