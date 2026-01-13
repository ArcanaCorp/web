import ParticlesCanvas from "../../components/ParticlesCanvas";
import SEO from "../../components/SEO";

export default function EcosystemPage () {

    const pageTitle = "Ecosistema Digital – ARCANA CORP";
    const pageDescription = "Descubre cómo nuestros productos digitales y plataformas se integran para crear un ecosistema eficiente, escalable y fácil de usar. Optimiza tu flujo de trabajo con ARCANA CORP.";

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": pageTitle,
            "description": pageDescription,
            "url": "https://arcanacorp.netlify.app/ecosystem",
            "inLanguage": "es-PE",
            "publisher": {
                "@type": "Organization",
                "name": "ARCANA",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://arcanacorp.netlify.app/logo.png"
                }
            }
        }
    ];

    return (

        <>
        
            <SEO
                title={pageTitle}
                description={pageDescription}
                url="https://arcanacorp.netlify.app/ecosystem"
                image="https://arcanacorp.netlify.app/og-image.png"
                jsonLd={jsonLd}
            />

            <main className="w-full">
                <section className="--products-hero relative overflow-hidden" style={{height: 'calc(100dvh - 60px)'}}>
                    <ParticlesCanvas/>
                    <div className="--products-hero-content relative h-full center m-auto" style={{width: '90%'}}>
                        <h1 className="text-center">
                            <p className="text-3xl text-medium lg:text-5xl">Nuestro Ecosistema</p>
                            <p className="text-lg text-light text-gray-300 lg:text-2xl">Integramos todos nuestros productos y plataformas para ofrecerte una experiencia fluida, eficiente y escalable</p>
                        </h1>
                    </div>
                </section>
            </main>

        </>

    )

}