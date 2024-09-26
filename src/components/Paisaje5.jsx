import paisaje5 from '../assets/img/paisaje5.jpg';
import PropTypes from 'prop-types';

export const Paisaje5 = ({props}) => {
  return (
    <img src={paisaje5} alt="Paisaje de primavera"
    className = {props.className} />
  )
}

Paisaje5.propTypes = {
    className: PropTypes.string
}