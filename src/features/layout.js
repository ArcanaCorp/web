import { useEffect } from "react";
import Header from "./layout/header";
import { applySystemClasses, initSystemObserver } from "../helpers/system";
import Footer from "./layout/footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function RootLayout () {

    useEffect(() => {
        applySystemClasses();
        initSystemObserver();
    }, [])

    return (

        <>
        
            <Header/>

            <Outlet/>

            <Footer/>

            <Toaster position="top-right" duration={3000} closeButton={true} />

        </>

    )

}