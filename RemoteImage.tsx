import { useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

interface RemoteImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  fallbackLabel: string;
}

export function RemoteImage({ src, fallbackLabel, alt, className, ...props }: RemoteImageProps) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`asset-fallback ${className || ''}`} role="img" aria-label={alt || fallbackLabel}>
      <span>{fallbackLabel}</span>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} onError={() => setFailed(true)} {...props} />
  );
}
