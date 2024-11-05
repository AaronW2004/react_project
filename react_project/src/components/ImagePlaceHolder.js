// src/components/ImagePlaceholder.js
import React from 'react';

function ImagePlaceholder({ src, alt }) {
  return <img src={src} className="image-placeholder" alt={alt || 'Image'} />;
}

export default ImagePlaceholder;
