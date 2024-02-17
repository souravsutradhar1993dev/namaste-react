const RestaurantAddress = ({cardDetails}) => {
    const {name, area, completeAddress} = cardDetails;

    return (
        <div>
            <h3>{name}</h3>
            <p>(Outlet: {area})</p>
            <p>{completeAddress}</p>
        </div>
    );
}

export default RestaurantAddress;