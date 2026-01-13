import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { Providers } from "./providers";

import './shared/css/global.css'
import './shared/css/system.css'

createRoot(document.getElementById('root')).render(
    <>
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    </>
)