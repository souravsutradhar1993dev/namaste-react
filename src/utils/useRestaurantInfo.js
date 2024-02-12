import { useEffect, useState } from "react";
import { CORS_PROXY } from "../utils/constants";

const useRestaurantInfo = resId => {
    
    const [resInfo, setResInfo] = useState(null);
    const fetchRestaurant = async (id) => {
        const restaurantData = await fetch(CORS_PROXY + 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.657817785063408&lng=88.3599042892456&restaurantId=' + id + '&catalog_qa=undefined&submitAction=ENTER');

        const json = await restaurantData.json();

        setResInfo(json?.data);
    }
    
    useEffect(() => {
        if(resId) {
            fetchRestaurant(resId);
        }
    }, []);

    return resInfo;
};

export default useRestaurantInfo;