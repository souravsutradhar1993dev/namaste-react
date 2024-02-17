import { RES_IMAGE_BASE_URL } from "../utils/constants";

const RestaurantMenuCarousel = ({carouselDetails}) => {
    const {title, dish, creativeId} = carouselDetails;
    
    return (
        <div className="basis-1/2 grow-0 shrink-0 relative">
            <p className="absolute text-white bottom-5 text-sm left-4">{(dish?.info?.price/100)}</p> 
            <img className="rounded-2xl" src={RES_IMAGE_BASE_URL + creativeId} />
        </div>
    );
}

export default RestaurantMenuCarousel;