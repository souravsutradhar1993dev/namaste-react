import { useState } from "react";

const useOnlineStatus = (defaultValue = true) => {
    const [ onlineStatus, setOnlineStatus ] = useState(defaultValue);

    window.addEventListener('offline', () => {
        setOnlineStatus(false);
    });

    window.addEventListener('online', () => {
        setOnlineStatus(true);
    });

    return onlineStatus;
}

export default useOnlineStatus;