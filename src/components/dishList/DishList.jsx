import styles from "./styles.module.css";
import Caption from "../caption/Caption.jsx";
import { useParams } from "react-router-dom";
import DishPreview from "../dishPreview/DishPreview.jsx";
import Loading from "../loading/Loading.jsx";
import Error from "../error/Error.jsx";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/apiSlice.js";

const DishList = () => {
    const {restaurantId} = useParams();
    const {isLoading, isError, data: dishes} = useGetDishesByRestaurantIdQuery({restaurantId});

    if (isLoading) {
        return <Loading/>;
    }

    if (isError) {
        return <Error/>;
    }

    return (
        <div>
            <Caption>Menu</Caption>
            <div className={styles.dishList}>
                {dishes.map(dish => {
                    return <DishPreview key={dish.id} id={dish.id} name={dish.name}/>
                })}
            </div>
        </div>
    )
}

DishList.propTypes = {}
export default DishList;