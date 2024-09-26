import paisaje6 from '../assets/img/paisaje6.jpg';
import PropTypes from 'prop-types';

export const Paisaje6 = ({props}) => {
  return (
    <img src={paisaje6} alt="Paisaje de primavera"
    className = {props.className} />
  )
}

Paisaje6.PropTypes = {
    className: PropTypes.string
}