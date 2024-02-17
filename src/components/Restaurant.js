import { RES_IMAGE_BASE_URL } from "../utils/constants";

const Restaurant = ({cardDetails}) => {
    const {name, cuisines, areaName, sla, expectationNotifiers, avgRatingString, totalRatingsString, costForTwoMessage } = cardDetails?.info;
    return (
        <div>
            <div className="flex justify-between border-b-2 border-dashed border-b-gray-300">
                <div>
                    <h2 className="font-bold">{name}</h2>
                    <p className="text-xs">{cuisines.join(', ')}</p>
                    <p className="text-xs">{areaName}, {sla?.lastMileTravelString}</p>
                    <div className="flex"><img className="w-4" src={RES_IMAGE_BASE_URL + expectationNotifiers?.[0]?.icon?.imageId} /> <span className="text-xs">{expectationNotifiers?.[0]?.text}</span></div>
                </div>
                <div>
                    <p>{avgRatingString}</p>
                    <p>{totalRatingsString}</p>
                </div>
            </div>
            <div className="flex font-bold gap-3">
                <p>{sla?.slaString}</p>
                <p>{costForTwoMessage}</p>
            </div>
        </div>
    )
}

export default Restaurant;