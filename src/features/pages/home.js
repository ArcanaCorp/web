import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ParticlesCanvas from "../../components/ParticlesCanvas";
import './styles/home.css'

export default function HomePage () {

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ARCANA",
            "url": "https://arcanacorp.netlify.app",
            "logo": "https://arcanacorp.netlify.app/logo.png",
            "sameAs": [
                "https://www.linkedin.com/company/arcanacorp",
                "https://twitter.com/arcanacorp",
                "https://www.facebook.com/arcanacorp"
            ],
            "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+51-000-000000",
                "contactType": "customer support",
                "areaServed": "PE",
                "availableLanguage": ["Spanish"]
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://arcanacorp.netlify.app",
            "name": "ARCANA",
            "publisher": {
                "@type": "Organization",
                "name": "ARCANA",
                "logo": {
                "@type": "ImageObject",
                    "url": "https://arcanacorp.netlify.app/logo.png"
                }
            }
        }
    ]

    return (

        <>

            <SEO
                title="ARCANA – Creamos herramientas para resolver problemas"
                description="Creamos herramientas digitales para que resolver problemas sea más rápido y fácil para todos."
                jsonLd={jsonLd}
            />

            <main className="w-full">

                <section className="--home-hero relative overflow-hidden">

                    <ParticlesCanvas/>

                    <div className="--home-hero-content relative h-full center m-auto">
                        <div className="flex flex-col gap-lg items-center">
                            <a href="https://andaleya.pe" target="_blank" rel="noreferrer" className="inline-block text-xs bg-muted border rounded-pill pv-sm ph-md text-center">Nueva actualización de Ándale Ya!</a>
                            <h1 className="text-center">
                                <p className="text-3xl text-medium lg:text-5xl">Creamos herramientas</p>
                                <p className="text-lg text-light text-gray-300 lg:text-2xl">Para que resolver problemas sea más rápido y fácil para todos</p>
                            </h1>
                            <div className="flex items-center gap-md justify-center">
                                <Link to={'/products'} className="pv-sm ph-md bg-white text-dark rounded-pill text-medium text-sm">Ver productos</Link>
                                <Link to={'/company'} className="pv-sm ph-md bg-muted border rounded-pill text-medium text-sm">Conócenos</Link>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
        
        </>

    )

}