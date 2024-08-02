import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice.js";

const RestaurantLabel = ({id}) => {
    const restaurant = useSelector(state => selectRestaurantById(state, id)) || {};

    return (
        <div>
            {restaurant.name}
        </div>
    );
};

RestaurantLabel.propTypes = {
    id: PropTypes.string.isRequired,
};

export default RestaurantLabel;