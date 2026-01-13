import { Link } from "react-router-dom";

export default function NotFound () {

    return (

        <main className="w-screen center" style={{height: 'calc(100dvh - 60px)'}}>
            <div className="flex flex-col gap-lg items-center">
                <h1 className="text-center">
                    <p className="text-3xl text-medium lg:text-5xl">404</p>
                    <p className="text-lg text-light text-gray-300 lg:text-2xl">Lo lamentamos no encontramos la página o no existe.</p>
                </h1>
                <Link to={'/'} className="pv-sm ph-md bg-white text-dark rounded-pill text-medium text-sm">Volver al inicio</Link>
            </div>
        </main>

    )

}