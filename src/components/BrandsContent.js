const BrandsContent = ({cardDetails}) => {
    const {title, brands} = cardDetails;
    return (
        <div className="mx-28 my-8">
            <h2 className="font-bold text-2xl py-4">{title}</h2>
            <div className={brands && brands.length > 0 && brands.length < 4 ? `grid grid-cols-${brands.length} gap-x-8 gap-y-4` : "grid grid-cols-4 gap-x-8 gap-y-4"}>
                {brands && brands.map(({link, text}, index) => <a className="py-3 px-2 border border-gray-300 rounded-lg text-center" href={link} key={index}>{text.length > 30 ? text.slice(0, 30) + '...' : text}</a>)}
            </div>
        </div>
    );
}

export default BrandsContent;