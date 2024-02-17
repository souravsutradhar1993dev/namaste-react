import RestaurantMenuCarousel from "./RestaurantMenuCarousel";

const RestaurantMenuCarousels = ({cardDetails}) => {
    console.log(cardDetails);
    const {title, carousel} = cardDetails;
    return (
        <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="flex gap-28 overflow-x-auto">
                {carousel.map(carouselItem => <RestaurantMenuCarousel key={carouselItem?.bannerId} carouselDetails={carouselItem} />)}
            </div>
        </div>
    );
}

export default RestaurantMenuCarousels;