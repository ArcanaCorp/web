import { Outlet, useLocation } from "react-router-dom";
import ParticlesCanvas from "../../components/ParticlesCanvas";
import SEO from "../../components/SEO";

export default function LegalPage() {
    const location = useLocation();

    // Configuramos SEO y hero según la ruta
    let title = "Legal – ARCANA CORP";
    let description = "Consulta información legal relevante de ARCANA CORP, incluyendo políticas, términos y regulaciones aplicables a nuestros servicios.";
    let url = "https://arcanacorp.netlify.app/legal";

    if (location.pathname.includes("/privacy")) {
        title = "Política de Privacidad – ARCANA CORP";
        description = "Descubre cómo ARCANA CORP protege la información de sus usuarios y clientes, cumpliendo con estándares legales de privacidad y protección de datos.";
        url = "https://arcanacorp.netlify.app/legal/privacy";
    } else if (location.pathname.includes("/terms")) {
        title = "Términos y Condiciones – ARCANA CORP";
        description = "Lee los términos y condiciones de uso de los servicios de ARCANA CORP, incluyendo responsabilidades, licencias y regulaciones aplicables a nuestros productos y plataformas.";
        url = "https://arcanacorp.netlify.app/legal/terms";
    }

    return (
        <>
            <SEO
                title={title}
                description={description}
                url={url}
                image="https://arcanacorp.netlify.app/og-image.png"
            />

            <main className="w-full">
                <section className="--company-hero relative overflow-hidden" style={{height: 'calc(100dvh - 60px)'}}>
                    <ParticlesCanvas/>
                    <div className="--company-hero-content relative h-full center m-auto" style={{width: '90%'}}>
                        <div className="flex flex-col gap-lg items-center text-center">
                            <h1 className="text-3xl lg:text-5xl">
                                {location.pathname.includes("/privacy")
                                    ? "Política de Privacidad"
                                    : location.pathname.includes("/terms")
                                        ? "Términos y Condiciones"
                                        : "Información Legal"
                                }
                            </h1>
                            <p className="text-lg text-gray-300 lg:text-2xl">{description}</p>
                        </div>
                    </div>
                </section>

                {/* Aquí se renderiza la ruta hija */}
                <Outlet />
            </main>
        </>
    );
}