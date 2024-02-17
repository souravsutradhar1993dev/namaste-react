import React, {lazy, Suspense, useEffect, useState} from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './components/Home';
//import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import SingleRestaurant from './components/SingleRestaurant';
import Offline from './components/Offline';
import useOnlineStatus from './utils/useOnlineStatus';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';

const AppLayout = () => {
    const onlineStatus = useOnlineStatus();
    const [userName, setUserName] = useState('');
    useEffect(() => {
        setUserName('Sourav Sutradhar')
    }, [])
    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className='app'>
                <Header />
                {
                    onlineStatus ? <Outlet /> : <Offline />
                }
            </div>
        </UserContext.Provider>
    ); 
};

const About = lazy(() => import('./components/About'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <Suspense fallback={<Shimmer />}><About/></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <SingleRestaurant />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
