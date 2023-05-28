'use client';

import { Icon } from '@iconify-icon/react';
// Track this issue https://github.com/vercel/next.js/issues/43068
export default function IconClientWrapper({
  icon,
  width,
  height,
  className = '',
}: {
  icon: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Icon
      className={className}
      icon={icon}
      width={width}
      height={height}
      style={{ width, height }}
    />
  );
}
