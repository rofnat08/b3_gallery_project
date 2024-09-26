import paisaje3 from '../assets/img/paisaje3.jpg';
import PropTypes from 'prop-types';

export const Paisaje3 = ({props}) => {
  return (
    <img src={paisaje3} alt="Paisaje de primavera"
    className = {props.className} />
  )
}

Paisaje3.PropTypes = {
    className: PropTypes.string
}