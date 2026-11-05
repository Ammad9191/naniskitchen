import { useState } from 'react';

export default function FoodImage({ src, alt, className = '', lazy = true }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-ivory via-gold-soft/40 to-leaf-olive/20 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 text-center font-display text-brown-dark/70">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
