"use client";

import { useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/utils";

interface Props {
  title: string;
  images: string[];
}

export const TesloProductCarousel = ({ title, images }: Props) => {
  const [featuredImage, setFeaturedImage] = useState<string>(images[0]);
  const [emblaRef] = useEmblaCarousel();

  return (
    <article className="flex flex-col gap-4">
      <Image
        src={`/products/${featuredImage}`}
        alt={`Featured image of ${title}`}
        height={500}
        width={500}
        className="rounded-lg object-cover w-full"
      />

      {images.length > 1 && (
        <article className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {images.map((image, idx) => (
              <div
                className={cn(
                  "flex-[0_0_90px] rounded-sm opacity-60 cursor-pointer overflow-hidden transition-opacity min-w-0",
                  { "opacity-100": image === featuredImage }
                )}
              >
                <Image
                  src={`/products/${image}`}
                  alt={`Image ${idx + 1} of ${title}`}
                  height={90}
                  width={90}
                  onClick={() => setFeaturedImage(image)}
                />
              </div>
            ))}
          </div>
        </article>
      )}
    </article>
  );
};
