import { useEffect, useState } from "react";
import { Icon } from "../../helpers/icons";
import { getCareers } from "../../db/db";
import ParticlesCanvas from "../../components/ParticlesCanvas";
import './styles/careers.css'

export default function CareersPage () {

    const [ careers, setCareers ] = useState([])

    const employmentType = {
        'intern': 'Prácticante'
    }

    const workMode = {
        'remote': 'Remoto'
    }

    useEffect(() => {
        getCareers().then(setCareers)
    }, [])

    return (

        <main className="w-full">

            <section className="--careers-hero relative overflow-hidden">
                <ParticlesCanvas/>
                <div className="--careers-hero-content relative h-full center m-auto" style={{width: '90%'}}>
                    <h1 className="text-center">
                        <p className="text-3xl text-medium lg:text-5xl">Únete a nosotros</p>
                        <p className="text-lg text-light text-gray-300 lg:text-2xl">Para construir una mejor forma de conectar, trabajar y vivir</p>
                    </h1>
                </div>
            </section>

            <section className="--careers-grid pv-lg">
                <ul className="grid m-auto gap-md md:grid-2 lg:grid-3" style={{width: '90%'}}>
                    {careers.map((career) => (
                        <li key={career.id} className="w-full bg-surface border rounded-md p-md flex flex-col justify-between items-left">
                            <div className="flex flex-col gap-md">
                                <div className="flex items-center justify-between">
                                    <h3>{career.title}</h3>
                                    <button className="w-30 h-30 center bg-none"><Icon name={'share'} /></button>
                                </div>
                                <div className="flex gap-sm">
                                    <span className="block text-xs pv-xs ph-sm bg-page rounded-pill border">{career.team}</span>
                                    <span className="block text-xs pv-xs ph-sm bg-page rounded-pill border">{employmentType[career.employment_type]}</span>
                                    <span className="block text-xs pv-xs ph-sm bg-page rounded-pill border">{workMode[career.work_mode]}</span>
                                    <span className="block text-xs pv-xs ph-sm bg-page rounded-pill border">{career.location}</span>
                                </div>
                            </div>
                            <ul className="flex flex-col pv-sm gap-sm">
                                <li className="flex flex-col gap-sm">
                                    <h4>Descripción</h4>
                                    <p className="text-sm text-gray-300">{career.description}</p>
                                </li>
                                <li className="flex flex-col gap-sm">
                                    <h4>Responsabilidades</h4>
                                    <p className="text-sm text-gray-300">{career.responsibilities}</p>
                                </li>
                            </ul>
                            <button className="w-maxcontent pv-xs ph-md bg-white rounded-pill text-medium">Aplicar</button>
                        </li>
                    ))}
                </ul>
            </section>

        </main>

    )

}