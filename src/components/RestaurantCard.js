import { useNavigate } from "react-router-dom";
import { RES_IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {id, name, avgRating, sla, cuisines, locality, cloudinaryImageId} = props?.resDetails?.info;
    const navigate = useNavigate();

    return (
        <div className="cursor-pointer transition hover:scale-95" onClick={() => navigate('/restaurants/' + id)}>
            <img className='w-full h-36 object-cover rounded-lg' src={RES_IMAGE_BASE_URL + cloudinaryImageId} />
            <div className='px-2 py-2'>
                <div className='text-lg font-semibold'>{name}</div>
                <div className='font-semibold'>
                    <span>{avgRating}</span> - <span className='eta'>{sla?.slaString}</span>
                </div>
                <div className='font-thin'>{cuisines.join(', ')}</div>
                <div className='font-thin'>{locality}</div>
            </div>
        </div>
    )
};

export default RestaurantCard;