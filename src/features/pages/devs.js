import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEmployees } from "../../db/db";
import ParticlesCanvas from "../../components/ParticlesCanvas";
import Image from "../../components/Image";
import './styles/devs.css'

export default function DevsPage () {

    const [ employees, setEmployees ] = useState([]);

    const handleNavigate = (link) => window.open(link)

    useEffect(() => {
        getEmployees().then(setEmployees)
    }, [])

    return (

        <main className="w-full">
        
            <section className="--devs-hero relative overflow-hidden">
                <ParticlesCanvas/>
                <div className="--devs-hero-content relative h-full center m-auto">
                    <h1 className="text-center">
                        <p className="text-3xl text-medium lg:text-5xl">Nuestro Team</p>
                        <p className="text-lg text-light text-gray-300 lg:text-2xl">El talento humano que hace la realidad los sueños con código</p>
                    </h1>
                </div>
            </section>
        
            <section className="--devs-grid pv-lg">
                <ul className="--devs-grid-lst grid m-auto gap-lg md:grid-2 lg:grid-4">
                    {employees.map((dev) => (
                        <li key={dev.id} className="--dev-card w-full border rounded-md p-sm pointer" onClick={() => handleNavigate(dev.link_network)}>
                            <div className="--dev-card-img w-full bg-muted rounded-sm overflow-hidden">
                                <Image url={dev.photo_url || ''} />
                            </div>
                            <div className="pv-sm flex flex-col gap-sm">
                                <div className="flex items-center justify-between">
                                    <h3>{dev.fullname}</h3>
                                    <p className="text-xs text-gray-300">@{dev.fullname}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-300">{dev.position}</p>
                                    <p className="text-gray-300">{dev.location || 'Jauja'}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="--devs-join h-screen center">
                <div className="--devs-join-content">
                    <div className="flex flex-col gap-md items-center text-center">
                        <h3 className="text-3xl lg:text-5xl">¿Quieres unirte a nuestro equipo?</h3>
                        <p className="text-sm text-gray-300 lg:text-2xl">Somos un equipo multidisciplinario que construye el futuro de la web. Si te entusiasma, consulta nuestras vacantes.</p>
                        <Link to={'/careers'} className="block bg-white text-dark pv-sm ph-md rounded-pill">Ver postulaciones</Link>
                    </div>
                </div>
            </section>
        
        </main>

    )

}