const BasicContent = ({cardDetails}) => {
    const {title} = cardDetails
    return <h2 className="font-bold text-2xl py-4 mx-28 my-8">{title}</h2>
}

export default BasicContent;