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
            let restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            restaurants = Array.isArray(restaurants) ? restaurants : [];
            setRestaurantList(restaurants)
            setFilteredRestaurantList(restaurants);
        } catch(e) {}
        setLoader(false)
    }
  
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='md:px-40 py-4'>
            <div className="flex flex-col md:flex-row justify-between py-5">
                <div>
                    <input className="px-2 py-2 mr-1 outline-none bg-gray-200 rounded-md" type="text" placeholder="Search" onChange={e => setSearchText(e.target.value)} value={searchText} />
                    <button className="bg-orange-400 px-4 py-2 text-white rounded-md" onClick={() => setFilteredRestaurantList( searchText ? restaurantList.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())) : restaurantList)}>Search</button>
                </div>
                <button className='bg-orange-400 px-4 py-2 text-white rounded-md' onClick={() => setFilteredRestaurantList(filteredRestaurantList.filter(restaurant => restaurant?.info?.avgRating >= 4.5))}>Top Rated Restaurants 4.5+</button>
            </div>
            {loader ? <div className="py-5"><Shimmer /></div> : (filteredRestaurantList.length === 0 ? <p className="text-center font-bold py-5 text-2xl">No restaurant found!</p> : <div className='grid md:grid-cols-4 md:gap-8 py-5'>{filteredRestaurantList.map(restaurant => <RestaurantCard key={restaurant?.info?.id} resDetails={restaurant}  /> )}</div>)}
        </div>
    )
};


export default Body;