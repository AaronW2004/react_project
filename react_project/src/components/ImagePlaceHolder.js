// src/components/ImagePlaceholder.js
import React from 'react';

function ImagePlaceholder({ src, alt = 'Image', className }) {
  return (
    <img src={src} alt={alt} className={className} />
  );
}

export default ImagePlaceholder;
