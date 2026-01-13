import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../features/layout";
import HomePage from "../features/pages/home";
import NotFound from "../features/pages/notfound";
import CareersPage from "../features/pages/careers";
import DevsPage from "../features/pages/devs";
import CompanyPage from "../features/pages/company";

export const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
                errorElement: <NotFound/>
            },
            {
                path: '/products',
                element: <NotFound/>,
                errorElement: <NotFound/>
            },
            {
                path: '/platform',
                element: <NotFound/>,
                errorElement: <NotFound/>
            },
            {
                path: '/teams',
                element: <DevsPage/>,
                errorElement: <NotFound/>
            },
            {
                path: '/research',
                element: <NotFound/>,
                errorElement: <NotFound/>
            },
            {
                path: '/ecosystem',
                element: <NotFound/>,
                errorElement: <NotFound/>
            },
            {
                path: '/company',
                element: <CompanyPage/>,
                errorElement: <NotFound/>
            },
            {
                path: '/careers',
                element: <CareersPage/>,
                errorElement: <NotFound/>
            },
            {
                path: '/contact',
                element: <NotFound/>,
                errorElement: <NotFound/>
            },
            {
                path: '/legal',
                element: <NotFound/>,
                children: [
                    {
                        path: '/legal/privacy'
                    },
                    {
                        path: '/legal/terms'
                    }
                ],
                errorElement: <NotFound/>
            }
        ]
    }
])