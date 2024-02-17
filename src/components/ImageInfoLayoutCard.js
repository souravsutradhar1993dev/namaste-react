import { RES_IMAGE_BASE_URL } from "../utils/constants";

const ImageInfoLayoutCard = ({data}) => {
    const {action, imageId} = data;
    return (
       <a href={action?.link} alt={action?.text} className="min-w-36">
            <img src={RES_IMAGE_BASE_URL + imageId} className="w-full" />
       </a> 
    )
}

export default ImageInfoLayoutCard;