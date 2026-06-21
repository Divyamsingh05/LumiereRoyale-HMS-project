import React from 'react';

// Minimal image placeholder component to avoid leftover runtime behavior.
const Image = ({ src, alt = '', ...props }) => (
  <img src={src} alt={alt} {...props} />
);

export default Image;
