import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = event => {
    const inputValue = event.currentTarget.value;
    this.setState({ inputValue });
  };
  handleSubmit = event => {
    event.preventDefault();
    const inputValue = this.state.value;

    this.props.getImages(inputValue);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form}>
          <button
            type="submit"
            className={css.button}
            onSubmit={this.handleSubmit}
          >
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.inputValue}
            onChange={this.state.value}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  getImages: PropTypes.func.isRequired,
};

export default Searchbar;
