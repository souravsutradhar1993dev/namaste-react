import { RES_IMAGE_BASE_URL } from "../utils/constants";

const RestaurantOffer = ({offerDetails}) => {
    const {header, offerLogo, couponCode, description} = offerDetails?.info
    return (
        <div className="border p-4">
            <div className="flex items-center">
                <img src={RES_IMAGE_BASE_URL + offerLogo} className="w-7" />
                <h2 className="text-sm font-bold">{header}</h2>
            </div>
            <p className="text-xs text-nowrap">{couponCode} | {description}</p>
        </div>
    )
};

export default RestaurantOffer;