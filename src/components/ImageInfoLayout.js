import ImageInfoLayoutCard from "./ImageInfoLayoutCard";

const ImageInfoLayout = ({cardDetails}) => {
    return (
        <div className="mx-28 my-8">
            <h2 className="font-bold text-2xl py-4">{cardDetails?.header?.title}</h2>
            <div className="flex overflow-x-auto no-scrollbar">
                {
                    cardDetails?.gridElements?.infoWithStyle?.info.map(imageItem => <ImageInfoLayoutCard key={imageItem?.id} data={imageItem} />)
                }
            </div>
        </div>
    )
}

export default ImageInfoLayout;