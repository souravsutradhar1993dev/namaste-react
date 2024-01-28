import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockupData";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(restaurants);
    return (
        <div className='body'>
            <button className='top-restaurant-btn' onClick={() => setRestaurantList(restaurantList.filter(restaurant => restaurant?.info?.avgRating >= 4.5))}>Top Rated Restaurants 4.5+</button>
            <div className='res-container'>
                {restaurantList.map(restaurant => <RestaurantCard key={restaurant?.info?.id} resDetails={restaurant}  /> )}
            </div>
        </div>
    )
};


export default Body;