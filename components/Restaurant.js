import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CORS_PROXY } from "../utils/constants";
import Shimmer from "./Shimmer";

const Restaurant = () => {
    const {resId} = useParams();
    const [resDetails, setResDetails] = useState(null);
    
    const fetchRestaurant = async (id) => {
        const restaurantData = await fetch(CORS_PROXY + 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.657817785063408&lng=88.3599042892456&restaurantId=' + id + '&catalog_qa=undefined&submitAction=ENTER');

        const json = await restaurantData.json();

        setResDetails(json?.data?.cards[0]?.card?.card?.info);
    }
    
    useEffect(() => {
        if(resId) {
            fetchRestaurant(resId);
        }
    }, []);
    if(!resDetails) return <Shimmer />

    return (
        <div>
            <h1>{resDetails?.name}</h1>
            <p>{resDetails?.cuisines.join(', ')}</p>
            <p>{resDetails?.areaName}</p>
        </div>
    );
};

export default Restaurant;