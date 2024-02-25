import { useDispatch } from "react-redux";
import { RES_IMAGE_BASE_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const CartItem = ({id, ribbon, name, price, offerTags, description, showImage, imageId}) => {
    const dispatch = useDispatch()
    const handleItemRemove = id => { 
        dispatch(removeItem(id))
    }
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-between pb-10 pt-5 border-b-2 w-3/4 items-center">
                <div className="w-10/12 pr-6">
                    <p>{ribbon?.text}</p>
                    <h3 className="text-lg font-semibold py-2">{name}</h3>
                    <p className="text-sm">{price / 100} {offerTags && offerTags.map(offerTag => <span className="px-2 py-1" style={{backgroundColor: offerTag?.backgroundColor, color: offerTag?.textColor}}><b>{offerTag?.title}</b> | {offerTag?.subTitle}</span>)}</p> 
                    <p></p> 
                    <p className="text-xs pt-3">{description}</p>
                </div>
                <div className="w-2/12 relative">
                    {showImage ? <img className="w-3/4 rounded-lg object-cover" src={RES_IMAGE_BASE_URL + imageId} /> : ''}
                    <button className="absolute border text-green-800 text-xs font-semibold px-6 py-1 bg-white left-4 top-24 shadow-lg rounded-md" onClick={() => handleItemRemove(id)}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;