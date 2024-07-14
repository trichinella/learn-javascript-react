import React from "react";
import { Review } from "../review/Review";

export const ReviewList = ({reviews}) => {
    return (
        <div>
            <h3 className={"small-header"}>Reviews</h3>
            <ul className={"review-list"}>
                {reviews.map(review => {
                    return <Review key={review.id} text={review.text}/>
                })}
            </ul>
        </div>
    )
}