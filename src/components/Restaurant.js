import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import Shimmer from "./Shimmer";

const Restaurant = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantInfo(resId);
    
    if(!resInfo) return <Shimmer />

    const {name, cuisines, areaName} = resInfo?.cards[0]?.card?.card?.info;

    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(', ')}</p>
            <p>{areaName}</p>
        </div>
    );
};

export default Restaurant;