import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Header from '../pages/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Footer from '../pages/Footer'
import AboutMe from '../pages/AboutMe'
import AddBeer from '../pages/AddBeer'
import AddBrewery from '../pages/AddBrewery'
import BeerCard from '../pages/BeerCard'
import BeerData from '../pages/BeerData'
import BreweryCard from '../pages/BreweryCard'
import BreweryData from '../pages/BreweryData'


export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <>
                <Header />
                <Outlet />
                <Footer />
            </>,
            children : [
                { index: true , element: <Home/> },
                { path: '/login' , element: <Login />},
                { path: '/register' , element: <Register/> },
                // { path: '/logout' , element: <div className="text-xl">Logout</div> },
                // { path: '*', element: <h1 className='text-xl text-red-300'>Page not found</h1>}

                { path: '/beer' , element: <BeerCard />},
                { path: '/brewery' , element: <BreweryCard />},
                { path: '/beer/:beerId' , element: <BeerData />},
                { path: '/brewery/:breweryId' , element: <BreweryData />},
                { path: '/addbeer' , element: <AddBeer />},
                { path: '/addbrewery' , element: <AddBrewery />},
                { path: '/aboutme' , element: <AboutMe />},
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}