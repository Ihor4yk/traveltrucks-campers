import { Review } from "@/types/camper";
import css from "./Reviews.module.css";
import { Icon } from "@/components/common/Icon/Icon";

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  const renderStars = (rating: number) => {
    const numericRating = Number(rating) || 0;

    return Array.from({ length: 5 }, (_, i) => {
      const iconName = i < numericRating ? "icon-star-filled" : "icon-star-empty";
      return <Icon key={i} name={iconName} size={16} className={i < numericRating ? css.starFilled : css.starEmpty} />;
    });
  };

  if (!reviews || reviews.length === 0) {
    return <p className={css.noReviews}>No reviews yet</p>;
  }

  return (
    <ul className={css.reviews}>
      {reviews.map((review, idx) => {
        const initial = review.reviewer_name.charAt(0).toUpperCase();

        return (
          <li key={idx} className={css.reviewItem}>
            <div className={css.header}>
              <div className={css.avatar}>{initial}</div>
              <div className={css.info}>
                <p className={css.name}>{review.reviewer_name}</p>
                <div className={css.stars}>{renderStars(review.reviewer_rating)}</div>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  );
}
