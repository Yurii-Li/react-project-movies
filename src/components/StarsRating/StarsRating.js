import StarRatings from "react-star-ratings";

const StarsRating = ({ vote_average }) => {
    return (
        <div>
            <StarRatings
                rating={vote_average / 2}
                starRatedColor="#f5c518"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="5px"
            />
        </div>
    );
};

export { StarsRating };
