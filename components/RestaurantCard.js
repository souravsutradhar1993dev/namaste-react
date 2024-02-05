import { useNavigate } from "react-router-dom";
import { RES_IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {id, name, avgRating, sla, cuisines, locality, cloudinaryImageId} = props?.resDetails?.info;
    const navigate = useNavigate();

    return (
        <div className='res-card' onClick={() => navigate('/restaurants/' + id)}>
            <img className='res-image' src={RES_IMAGE_BASE_URL + cloudinaryImageId} />
            <div className='res-details'>
                <div className='title'>{name}</div>
                <div className='res-additional-details'>
                    <span className='rating'>{avgRating}</span> - <span className='eta'>{sla?.slaString}</span>
                </div>
                <div className='cuisines'>{cuisines.join(', ')}</div>
                <div className='location'>{locality}</div>
            </div>
        </div>
    )
};

export default RestaurantCard;