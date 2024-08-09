import PropTypes from 'prop-types';

const RestaurantLabel = ({name}) => {
    return (
        <div>
            {name}
        </div>
    );
};

RestaurantLabel.propTypes = {
    name: PropTypes.string.isRequired,
};

export default RestaurantLabel;