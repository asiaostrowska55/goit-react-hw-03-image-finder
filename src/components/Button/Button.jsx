import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {
  handleClick = () => {
    const { loadMore } = this.props;
    const nextPage = loadMore + 1;
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
  onClick: PropTypes.func.isRequired,
  loadMore: PropTypes.number,
};
export default Button;
