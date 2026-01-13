import { useEffect, useState } from "react";
import ParticlesCanvas from "../../components/ParticlesCanvas";
import SEO from "../../components/SEO";
import { getProducts } from "../../db/db";
import Image from "../../components/Image";
import { categoriesProduct } from "../../helpers/texts";

export default function ProductsPage () {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    const jsonLdProducts = products.map(p => ({
        "@context": "https://schema.org",
        "@type": "Product",
        name: p.name,
        description: p.description,
        image: p.image || undefined,
        url: p.link || undefined,
        datePublished: p.publish_at || undefined,
        brand: {
            "@type": "Organization",
            name: "ARCANA",
            url: "https://arcanacorp.netlify.app",
            logo: "https://arcanacorp.netlify.app/logo.png"
        }
    }));

    return (

        <>
        
            <SEO
                title="Productos – ARCANA CORP"
                description="Descubre los productos digitales de ARCANA CORP, creados para agilizar procesos y mejorar la experiencia del usuario."
                url="https://arcanacorp.netlify.app/products"
                image={products[0]?.image || "https://arcanacorp.netlify.app/og-image.png"}
                jsonLd={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "ARCANA",
                        url: "https://arcanacorp.netlify.app",
                        logo: "https://arcanacorp.netlify.app/logo.png",
                        sameAs: [
                            "https://www.linkedin.com/company/arcanacorp",
                            "https://twitter.com/arcanacorp",
                            "https://www.facebook.com/arcanacorp"
                        ]
                    },
                    ...jsonLdProducts
                ]}
            />

            <main className="w-full">

                <section className="--products-hero relative overflow-hidden" style={{height: 'calc(100dvh - 60px)'}}>
                    <ParticlesCanvas/>
                    <div className="--products-hero-content relative h-full center m-auto" style={{width: '90%'}}>
                        <h1 className="text-center">
                            <p className="text-3xl text-medium lg:text-5xl">Nuestros Productos</p>
                            <p className="text-lg text-light text-gray-300 lg:text-2xl">Productos que hacen la diferencia en el tiempo y la facilidad</p>
                        </h1>
                    </div>
                </section>

                <section className="--products-grid pv-lg">
                    <ul className="grid m-auto gap-md md:grid-2 lg:grid-3" style={{width: '90%'}}>
                        {products.map((p) => {
                            const publish = p.publish_at ? new Intl.DateTimeFormat('es-PE', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(p.publish_at + 'T00:00:00')) : 'Próximamente';
                            return (
                                <li key={p.id} className="--product-card w-full border rounded-md p-sm pointer">
                                    <div className="--product-card-img w-full bg-muted rounded-sm overflow-hidden">
                                        {p.image && (
                                            <Image url={p.image} alt={`${p.name} - ${p.description}. Una app de ARCANAN CORP`} />
                                        )}
                                    </div>
                                    <div className="pv-sm flex flex-col gap-sm">
                                        <div className="flex items-center justify-between">
                                            <h3>{p.name}</h3>
                                            <span className="text-xs bg-surface border pv-xs ph-sm rounded-pill">{categoriesProduct[p.category]}</span>
                                        </div>
                                        <p className="text-sm text-gray-300">{p.description}</p>
                                        <p className="flex items-center justify-between">
                                            <time className="text-xs text-gray-300" dateTime={p.publish_at}><b>Publicado {publish}</b></time>
                                            <a href={p.link} className="bg-white text-dark text-sm pv-xs ph-sm rounded-pill" target="_blank" rel="noreferrer">Ir al servicio</a>
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </section>

            </main>
        
        </>

    )

}