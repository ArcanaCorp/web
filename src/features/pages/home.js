import { Link } from "react-router-dom";
import ParticlesCanvas from "../../components/ParticlesCanvas";
import './styles/home.css'

export default function HomePage () {

    return (

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

    )

}