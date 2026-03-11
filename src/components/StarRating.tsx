import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
}

const StarRating = ({ rating, size = 14 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`f-${i}`} size={size} className="fill-star-filled text-star-filled" />
      ))}
      {hasHalf && <StarHalf size={size} className="fill-star-filled text-star-filled" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`e-${i}`} size={size} className="text-star-empty" />
      ))}
    </div>
  );
};

export default StarRating;
