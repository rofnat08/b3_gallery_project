import Paisaje4 from '../assets/img/paisaje4.jpg';
import PropTypes from 'prop-types';

export const Paisaje4 = ({props}) => {
  return (
    <img src="{paisaje4}" alt="Paisaje de primavera"
    className = {props.className} />
  )
}

Paisaje4.PropTypes = {
    className: PropTypes.string
}