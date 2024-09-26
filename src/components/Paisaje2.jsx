import paisaje2 from '../assets/img/paisaje2.jpg';
import PropTypes from 'prop-types';

export const Paisaje2 = ({props}) => {
  return (
    <img src={paisaje2} alt="Paisaje de primavera"
    className = {props.className} />
  )
}

Paisaje2.PropTypes = {
    className: PropTypes.string
}