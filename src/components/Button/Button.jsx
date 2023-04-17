import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends Component {
  handleClick = () => {
    const { page } = this.props;
    const nextPage = page + 1;
    this.props.onClick(nextPage);
  };
  render() {
    return (
      <button type="button" className={css.button} onClick={this.handleClick}>
        Load More
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  page: PropTypes.number,
};

export default Button;
