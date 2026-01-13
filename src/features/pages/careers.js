import { useEffect, useState } from "react";
import { Icon } from "../../helpers/icons";
import { getCareers } from "../../db/db";
import { employmentType, workMode } from "../../helpers/texts";

import ParticlesCanvas from "../../components/ParticlesCanvas";
import './styles/careers.css'
import { messageShareJob } from "../../helpers/share";
import ModalApply from "../../components/Apply";
import SEO from "../../components/SEO";

export default function CareersPage () {

    const [ careers, setCareers ] = useState([])
    const [ modal, setModal ] = useState({
        view: false,
        job: null
    })

    const handleToogleModal = (view, job) => {
        setModal({view: view, job: job})
        document.body.classList.toggle('overflow-hidden')
    }

    const handleShared = (job) => {
        const message = messageShareJob(job)
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const jsonLd = careers.map(job => ({
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: job.title,
        description: job.description,
        datePosted: job.created_at || new Date().toISOString().split('T')[0],
        validThrough: job.validThrough || new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
        employmentType: job.employment_type?.toUpperCase() || "INTERN",
        hiringOrganization: {
            "@type": "Organization",
            name: "ARCANA",
            sameAs: "https://arcanacorp.netlify.app",
            logo: "https://arcanacorp.netlify.app/logo.png"
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: job.location || "Jauja",
                addressCountry: "PE"
            }
        }
    }));

    useEffect(() => {
        getCareers().then(setCareers)
    }, [])

    useEffect(() => {
        if (!careers.length) return;

        const params = new URLSearchParams(window.location.search);
        const jobSlug = params.get('job');

        if (!jobSlug) return;

        const jobFound = careers.find(
            (career) => career.slug === jobSlug
        );

        if (jobFound) {
            handleToogleModal(true, jobFound);
        }
    }, [careers])

    return (

        <>

            <SEO 
                title={'Carreras en ARCANA – Vacantes para desarrolladores y practicantes'}
                description={'Explora nuestras vacantes y postula para formar parte del equipo de desarrollo de ARCANA'}
                type="website"
                url={'https://arcanacorp.netlify.app/careers'}
                image={`https://arcanacorp.netlify.app/og-careers.png`}
                jsonLd={jsonLd}
            />

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
                                        <button className="w-30 h-30 center bg-none" onClick={() => handleShared(career)}><Icon name={'share'} /></button>
                                    </div>
                                    <div className="flex gap-sm">
                                        <span className="block text-xs pv-xs ph-sm bg-page rounded-pill border">{career.team}</span>
                                        <span className="block text-xs pv-xs ph-sm bg-page rounded-pill border">{career.department}</span>
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
                                    <li className="flex flex-col gap-sm">
                                        <h4>Requisitos</h4>
                                        <p className="text-sm text-gray-300">{career.requirements}</p>
                                    </li>
                                </ul>
                                <button className="w-maxcontent pv-xs ph-md bg-white rounded-pill text-medium" onClick={() => handleToogleModal(true, career)}>Aplicar</button>
                            </li>
                        ))}
                    </ul>
                </section>

                {modal.view && modal.job !== null && (
                    <div className="--careers-overlay fixed inset-0 w-screen h-screen center">
                        <div className="--careers-modal m-auto bg-surface border rounded-md p-md">
                            <div className="flex items-center justify-between">
                                <h4>{modal.job.title}</h4>
                                <button className="bg-muted w-40 h-40 center rounded-md hover" onClick={() => handleToogleModal(false, '')}><Icon name={'close'} /></button>
                            </div>
                            <ModalApply job={modal.job} />
                        </div>
                    </div>
                )}

            </main>

        </>
    )

}