import React from 'react';

const Icon = ({
  src,
  className,
  onClick,
}) => {
  return <img src={src} className={className} onClick={onClick} alt='' />
}

export default Icon
