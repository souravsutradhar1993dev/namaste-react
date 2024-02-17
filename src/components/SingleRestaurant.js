import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import Shimmer from "./Shimmer";
import Body from "./Body";

const SingleRestaurant = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantInfo(resId);
    if(!resInfo) return <Shimmer />
    return (
        <div className="mx-72 mt-20">
            <Body cards={resInfo?.cards} />
        </div>
    );
};

export default SingleRestaurant;