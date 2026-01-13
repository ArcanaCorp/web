import ParticlesCanvas from "../../components/ParticlesCanvas";
import SEO from "../../components/SEO";

export default function PlatformPage () {

    const pageTitle = "Plataforma – ARCANA CORP";
    const pageDescription = "Nuestra plataforma permite a desarrolladores crear soluciones digitales innovadoras, integrando herramientas escalables y seguras para transformar ideas en productos reales.";

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
            "@type": "WebPage",
            "name": pageTitle,
            "description": pageDescription,
            "url": "https://arcanacorp.netlify.app/platform",
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
                url="https://arcanacorp.netlify.app/platform"
                image="https://arcanacorp.netlify.app/og-image.png"
                jsonLd={jsonLd}
            />

            <main className="w-full">
                <section className="--company-hero relative overflow-hidden" style={{height: 'calc(100dvh - 60px)'}}>
                    
                    <ParticlesCanvas/>
                
                    <div className="--company-hero-content relative h-full center m-auto" style={{width: '90%'}}>
                        <div className="flex flex-col gap-lg items-center">
                            <h1 className="text-center">
                                <p className="text-3xl text-medium lg:text-5xl">Nuestra plataforma</p>
                                <p className="text-lg text-light text-gray-300 lg:text-2xl">Diseñada para desarrolladores que quieren innovar.<br/>Integra herramientas escalables y seguras para transformar ideas en productos digitales de alto impacto</p>
                            </h1>
                        </div>
                    </div>
                
                </section>
            </main>
        
        </>

    )

}