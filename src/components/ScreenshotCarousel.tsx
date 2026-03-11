import { useRef, useState } from "react";

interface ScreenshotCarouselProps {
  images: string[];
}

const ScreenshotCarousel = ({ images }: ScreenshotCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-2"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Screenshot ${i + 1}`}
            className="h-[280px] sm:h-[340px] w-auto rounded-lg flex-shrink-0 select-none pointer-events-none"
            style={{ scrollSnapAlign: "start" }}
            draggable={false}
          />
        ))}
      </div>
      {/* Fade edge */}
      <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default ScreenshotCarousel;
