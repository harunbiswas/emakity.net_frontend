import { AiFillStar } from "react-icons/ai";

export default function Review({ num }) {
  let reviews = [];

  for (let i = 1; i <= num; i++) {
    reviews.push(i);
  }
  return (
    <div className="review">
      {reviews.map((data, i) => (
        <AiFillStar key={i} />
      ))}
    </div>
  );
}
