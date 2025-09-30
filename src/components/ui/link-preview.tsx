"use client";

import React, { useState, useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";

// Hook to generate the preview image source
function usePreviewSource(
  url: string,
  width: number,
  height: number,
  isStatic: boolean,
  staticImageSrc?: string,
) {
  return useMemo(() => {
    if (isStatic) {
      return staticImageSrc || "";
    }
    // Build the Microlink URL for dynamic screenshot
    const params = new URLSearchParams({
      url,
      screenshot: "true",
      meta: "false",
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": "false",
      "viewport.deviceScaleFactor": "1",
      "viewport.width": (width * 2).toString(),
      "viewport.height": (height * 2).toString(),
    });
    return `https://api.microlink.io/?${params.toString()}`;
  }, [isStatic, staticImageSrc, url, width, height]);
}

type LinkPreviewProps = {
  url: string;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  fallbackContent?: React.ReactNode;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
  url,
  className,
  width = 400,
  height = 250,
  alt,
  isStatic = false,
  imageSrc = "",
  fallbackContent,
}: LinkPreviewProps) => {
  const [imageLoadFailed, setImageLoadFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const finalImageSrc = usePreviewSource(
    url,
    width,
    height,
    isStatic,
    imageSrc,
  );

  // Reset error state when source changes
  useEffect(() => {
    setImageLoadFailed(false);
    setIsLoading(true);
  }, [finalImageSrc]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageLoadFailed(true);
    setIsLoading(false);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-white dark:bg-neutral-900",
        "border border-neutral-200 dark:border-neutral-700",
        "shadow-lg w-full h-full",
        className,
      )}
    >
      {imageLoadFailed ? (
        // Fallback content when image fails to load
        <div className="flex items-center justify-center w-full h-full bg-neutral-100 dark:bg-neutral-800">
          {fallbackContent || (
            <div className="text-center text-neutral-500 dark:text-neutral-400 text-sm font-medium">
              <div className="mb-2">🌐</div>
              <div>Preview unavailable</div>
              <div className="text-xs mt-1 opacity-70">
                {new URL(url).hostname}
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Loading state */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 z-10">
              <div className="text-center text-neutral-500 dark:text-neutral-400 text-sm">
                <div className="animate-spin w-6 h-6 border-2 border-neutral-300 border-t-neutral-600 rounded-full mx-auto mb-2"></div>
                <div>Loading preview...</div>
              </div>
            </div>
          )}

          {/* Preview image */}
          <img
            src={finalImageSrc}
            className="block w-full h-full object-cover bg-neutral-50 dark:bg-neutral-800"
            alt={alt || `Link preview for ${url}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        </>
      )}
    </div>
  );
};
