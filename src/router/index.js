import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../features/layout";
import HomePage from "../features/pages/home";
import NotFound from "../features/pages/notfound";
import CareersPage from "../features/pages/careers";
import DevsPage from "../features/pages/devs";
import CompanyPage from "../features/pages/company";
import ProductsPage from "../features/pages/products";
import EcosystemPage from "../features/pages/ecosystem";
import PlatformPage from "../features/pages/platform";
import ResearchPage from "../features/pages/research";
import LegalPage from "../features/pages/legal";
import PrivacyPage from "../features/pages/privacy";
import TermsPage from "../features/pages/terms";

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
                element: <ProductsPage/>,
                errorElement: <NotFound/>
            },
            {
                path: '/platform',
                element: <PlatformPage/>,
                errorElement: <NotFound/>
            },
            {
                path: '/teams',
                element: <DevsPage/>,
                errorElement: <NotFound/>
            },
            {
                path: '/research',
                element: <ResearchPage/>,
                errorElement: <NotFound/>
            },
            {
                path: '/ecosystem',
                element: <EcosystemPage/>,
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
                element: <LegalPage/>,
                children: [
                    {
                        path: '/legal/privacy',
                        element: <PrivacyPage/>,
                    },
                    {
                        path: '/legal/terms',
                        element: <TermsPage/>,
                    }
                ],
                errorElement: <NotFound/>
            }
        ]
    }
])