import css from "./Reviews.module.css";

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  if (!reviews.length) return <p>No reviews yet</p>;

  return (
    <ul className={css.reviews}>
      {reviews.map((review, idx) => (
        <li key={idx}>
          <strong>{review.reviewer_name}</strong>
          <span> {review.reviewer_rating} ⭐</span>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}
