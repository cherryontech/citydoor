'use client'
import PropTypes from 'prop-types';

const validateLevel = (props, propName) => {
  const level = props[propName]
  if (!Number.isInteger(level)) {
    return new Error('Use a number')
  }
  if (level < 1 || level > 6) {
    return new Error('Use a heading level 1 - 6')
  }
  return null 
}

export default function Heading(props) {  
  const { level, children, className } = props;
  const Tag = 'h' + level
  
  return(
    <Tag className={className}>{children}</Tag>
  )
}

Heading.propTypes = {
  level: validateLevel
}