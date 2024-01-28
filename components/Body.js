import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { CORS_PROXY } from "../utils/constants";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loader, setLoader] = useState(true);
    const fetchData = async () => {
        try {
            const resData = await fetch(CORS_PROXY + 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.657817785063408&lng=88.3599042892456&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const json = await resData.json();
            setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch(e) {}
        setLoader(false)
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='body'>
            <div className="res-filter">
                <div className="search-section">
                    <input type="text" placeholder="Search" onChange={e => setSearchText(e.target.value)} value={searchText} />
                    <button onClick={() => setFilteredRestaurantList( searchText ? restaurantList.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())) : restaurantList)}>Search</button>
                </div>
                <button className='top-restaurant-btn' onClick={() => setFilteredRestaurantList(filteredRestaurantList.filter(restaurant => restaurant?.info?.avgRating >= 4.5))}>Top Rated Restaurants 4.5+</button>
            </div>
            <div className='res-container'>
                {loader ? <Shimmer /> : (filteredRestaurantList.length === 0 ? <p className="no-res">No restaurant found!</p> : filteredRestaurantList.map(restaurant => <RestaurantCard key={restaurant?.info?.id} resDetails={restaurant}  /> ))}
            </div>
        </div>
    )
};


export default Body;