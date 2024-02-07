'use client'
import PropTypes from 'prop-types';
import Heading from './heading';



export default function ImageCard (props) {
  const {alt, descriptionText, headingText, level, src, Tag} = props;
  const headingLvl = level || 3
  return (
    <Tag className='w-48'>
      <img alt={alt} src={src}/>
      <Heading level={headingLvl}>{headingText}</Heading>
      <p>{descriptionText}</p>
    </Tag>
  )
}


ImageCard.propTypes = {
  alt: PropTypes.string.isRequired,  
  descriptionText: PropTypes.string,
  headingText: PropTypes.string,
  level: PropTypes.number,
  src: PropTypes.string.isRequired,
  Tag: PropTypes.elementType
}