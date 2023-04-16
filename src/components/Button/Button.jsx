import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends Component {
  handleClick = () => {
    const { currentPage } = this.props;
    const nextPage = currentPage + 1;
    this.props.onClick(nextPage);
  };
  render() {
    return (
      <button type="button" className={css.button} onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  loadMore: PropTypes.func,
};

export default Button;
