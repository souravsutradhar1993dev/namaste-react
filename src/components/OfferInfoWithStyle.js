import RestaurantOffer from "./RestaurantOffer";

const OfferInfoWithStyle = ({cardDetails}) => {
    const {offers} = cardDetails?.gridElements?.infoWithStyle
    return (
        <div className="flex gap-4  overflow-x-auto">
            {offers.map((offer, index) => <RestaurantOffer key={index} offerDetails={offer} />)}
        </div>
    );
}

export default OfferInfoWithStyle; 