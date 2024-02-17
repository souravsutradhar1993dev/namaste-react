import { useState } from "react";
import Dish from "./Dish";

const ItemCategory = ({cardDetails}) => {
    return (
        <div>
            {
                cardDetails?.itemCards.map(itemCard => <Dish key={(Math.random() * Math.random())} dish={itemCard?.card} />)
            }
        </div>
    );
}

export const ItemCategoryWithHeading = (ItemCategory) => {
    return (props) => {
        console.log(props.showDishes)
        const {title, itemCards} = props?.cardDetails;
        
        return (
            <div className="px-5 pt-10" onClick={() => props.setShowCategoryTitle()}>
                <div className="flex justify-between cursor-pointer">
                    <h2 className="text-xl font-bold">{title} ({itemCards.length})</h2>
                    <span>{props.showDishes ? '⬆' : '⬇'}</span>
                </div>
                {props.showDishes && <ItemCategory cardDetails={props?.cardDetails} />}
            </div>
        )
    }
}

export default ItemCategory;