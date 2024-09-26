import { Link } from 'react-router-dom';
import { Paisaje1 } from './Paisaje1';
import { Paisaje2 } from './Paisaje2';
import { Paisaje3 } from './Paisaje3';
import { Paisaje4 } from './Paisaje4';
import { Paisaje5 } from './Paisaje5';
import { Paisaje6 } from './Paisaje6';

export const Navegation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to ='/paisaje1' className='links'>
        <figure  className='thumbnail-image-size'>
            <Paisaje1 />
            <figcaption>Paisaje 1</figcaption>
        </figure>
      </Link>
      <Link to ='/paisaje2' className='links'>
        <figure  className='thumbnail-image-size'>
            <Paisaje2 />
            <figcaption>Paisaje 2</figcaption>
        </figure>
      </Link>
      <Link to ='/paisaje3' className='links'>
        <figure  className='thumbnail-image-size'>
            <Paisaje3 />
            <figcaption>Paisaje 3</figcaption>
        </figure>
      </Link>
      <Link to ='/paisaje4' className='links'>
        <figure  className='thumbnail-image-size'>
            <Paisaje4 />
            <figcaption>Paisaje 4</figcaption>
        </figure>
      </Link>
      <Link to ='/paisaje5' className='links'>
        <figure  className='thumbnail-image-size'>
            <Paisaje5 />
            <figcaption>Paisaje 5</figcaption>
        </figure>
      </Link>
      <Link to ='/paisaje6' className='links'>
        <figure  className='thumbnail-image-size'>
            <Paisaje6 />
            <figcaption>Paisaje 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}
