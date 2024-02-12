import { useState, useEffect } from "react";

const User = ({name, location, contact}) => {
    const [ count1 ] = useState(0)
    const [ count2 ] = useState(1)

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('timer function')
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    
    return (
        <>
            <h1>{name}</h1>
            <h2>{location}</h2>
            <h3>{contact}</h3>
            <p>Count1: {count1}</p>
            <p>Count2: {count2}</p>
        </>
    )
};

export default User;