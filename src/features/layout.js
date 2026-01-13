import { useEffect } from "react";
import Header from "./layout/header";
import { applySystemClasses, initSystemObserver } from "../helpers/system";
import Footer from "./layout/footer";
import { Outlet } from "react-router-dom";

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

        </>

    )

}