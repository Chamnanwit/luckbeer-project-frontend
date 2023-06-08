import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Header from '../pages/Header'
// import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Footer from '../pages/Footer'

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
                // { index: true , element: <Home/> },
                { path: '/login' , element: <Login />},
                { path: '/register' , element: <Register/> },
                // { path: '/logout' , element: <div className="text-xl">Logout</div> },
                // { path: '*', element: <h1 className='text-xl text-red-300'>Page not found</h1>}
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}