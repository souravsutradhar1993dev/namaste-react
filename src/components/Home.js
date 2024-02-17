import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Body from "./Body";

const Home = () => {
    const [cards, setCards] = useState([]);
    const [loader, setLoader] = useState(true);
    const fetchData = async () => {
        try {
            const resData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.657817785063408&lng=88.3599042892456&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const json = await resData.json();
            setCards(json?.data?.cards);
        } catch(e) {}
        setLoader(false)
    }
  
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Body cards={cards} />
    )
};

export default Home;