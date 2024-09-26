import paisaje1 from '../assets/img/paisaje1.jpg';
import PropTypes from 'prop-types';

export const Paisaje1 = ({props}) => {
  return (
    <img src={paisaje1} alt="Paisaje de primavera"
    className = {props.className} />
  )
}

Paisaje1.PropTypes = {
    className: PropTypes.string
}