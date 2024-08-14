import Dish from "../../../components/dish/Dish.jsx";
import { getDishById } from "../../../api/get-dish-by-id.js";
import PropTypes from "prop-types";

async function DishPage({params: {dishId}}) {
    const {name, ingredients} = await getDishById(dishId);

    return (
        <div>
            <Dish name={name} ingredients={ingredients}/>
        </div>
    );
}

DishPage.propTypes = {
    params: PropTypes.object,
}

export default DishPage;