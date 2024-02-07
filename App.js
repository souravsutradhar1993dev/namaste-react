import React, {lazy, Suspense} from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
//import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Restaurant from './components/Restaurant';
import Offline from './components/Offline';
import useOnlineStatus from './utils/useOnlineStatus';
import Shimmer from './components/Shimmer';

const AppLayout = () => {
    const onlineStatus = useOnlineStatus();
    return (
        <div className='app'>
            <Header />
            {
                onlineStatus ? <Outlet /> : <Offline />
            }
            <Footer />
        </div>
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
                element: <Body/>
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
                element: <Restaurant />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
