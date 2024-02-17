import RestaurantCard from "./RestaurantCard";

const FavouriteRestaurantInfoWithStyle = ({cardDetails}) => {
    return (
        <div className="mx-28 my-8">
            <h2 className="font-bold text-2xl py-4">{cardDetails?.header?.title}</h2>
            <div className="grid grid-cols-4 gap-8">
                {
                    cardDetails?.gridElements?.infoWithStyle?.restaurants.map(restaurant => <RestaurantCard key={restaurant?.info?.id} resDetails={restaurant} />)
                }
            </div>
        </div>
    )
}

export default FavouriteRestaurantInfoWithStyle;