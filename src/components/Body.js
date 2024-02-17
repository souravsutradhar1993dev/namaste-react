import { useState } from "react";
import BrandsContent from "./BrandsContent";
import BasicContent from "./BasicContent";
import ImageInfoLayout from "./ImageInfoLayout";
import FavouriteRestaurantInfoWithStyle from "./FavouriteRestaurantInfoWithStyle";
import Restaurant from "./Restaurant";
import OfferInfoWithStyle from "./OfferInfoWithStyle";
import RestaurantMenuFilter from "./RestaurantMenuFilter";
import RestaurantMenuCarousels from "./RestaurantMenuCarousels";
import ItemCategory, {ItemCategoryWithHeading} from "./ItemCategory";
import RestaurantLicenseInfo from "./RestaurantLicenseInfo";
import RestaurantAddress from "./RestaurantAddress";

const Body = ({cards}) => {
    const [showCategoryTitle, setShowCategoryTitle] = useState('Recommended');    
    return <>
        {
            cards.map((card, index) => {
                if(card.hasOwnProperty('groupedCard')) {
                    return card?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((groupedCard, groupedCardIndex) => {
                        const cardDetails = groupedCard?.card?.card;
                        if(cardDetails && cardDetails.hasOwnProperty('@type')) {
                            switch(cardDetails['@type']) {
                                case "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel":
                                    return <RestaurantMenuCarousels key={groupedCardIndex} cardDetails={cardDetails} />
                                break;
                                case "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory":
                                    const ItemCategoryModified = ItemCategoryWithHeading(ItemCategory);
                                    return <ItemCategoryModified key={groupedCardIndex} cardDetails={cardDetails} showDishes={showCategoryTitle === cardDetails?.title ? true : false} setShowCategoryTitle={() => setShowCategoryTitle(cardDetails?.title === showCategoryTitle ? '' : cardDetails?.title)}  />
                                break;
                                case "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo":
                                    return <RestaurantLicenseInfo key={groupedCardIndex} cardDetails={cardDetails} />
                                break;
                                case "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress":
                                    return <RestaurantAddress key={groupedCardIndex} cardDetails={cardDetails} />
                                break;
                            }
                        }
                    })
                }else {
                    const cardDetails = card?.card?.card;
                    if(cardDetails && cardDetails.hasOwnProperty('@type')) {
                        switch(cardDetails['@type']) {
                            case 'type.googleapis.com/swiggy.seo.widgets.v1.BasicContent':
                                return <BasicContent key={index} cardDetails={cardDetails} />
                            break;
                            case 'type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent':
                                return <BrandsContent key={index} cardDetails={cardDetails} />
                            break;
                            case 'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget':
                                switch(cardDetails?.gridElements?.infoWithStyle['@type']) {
                                    case "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard":
                                        return <ImageInfoLayout key={index} cardDetails={cardDetails} />
                                    break;
                                    case "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle":
                                        return <FavouriteRestaurantInfoWithStyle key={index} cardDetails={cardDetails} />
                                    break;
                                    case "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle":
                                        return <OfferInfoWithStyle key={index} cardDetails={cardDetails} />
                                    break;
                                }
                            break;
                            case "type.googleapis.com/swiggy.presentation.food.v2.Restaurant":
                                return <Restaurant key={index} cardDetails={cardDetails} />
                            break;
                            case "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge":
                                return <RestaurantMenuFilter key={index} cardDetails={cardDetails} />
                            break;
                        }
                    }
                }
            })
        }
    </>

}

export default Body;