import { RES_IMAGE_BASE_URL } from "../utils/constants";

const RestaurantLicenseInfo = ({cardDetails}) => {
    const {imageId, text} = cardDetails;
    return (
        <div>
            <img src={RES_IMAGE_BASE_URL + imageId} />
            <p>{text?.[0]}</p>
        </div>
    );
}

export default RestaurantLicenseInfo;