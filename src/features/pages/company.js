import ParticlesCanvas from "../../components/ParticlesCanvas";

//IrOFGQSXBkBht0gO

export default function CompanyPage () {

    return (

        <main className="w-full">

            <section className="--company-hero relative overflow-hidden" style={{height: 'calc(100dvh - 60px)'}}>
                
                <ParticlesCanvas/>

                <div className="--company-hero-content relative h-full center m-auto" style={{width: '90%'}}>
                    <div className="flex flex-col gap-lg items-center">
                        <h1 className="text-center">
                            <p className="text-3xl text-medium lg:text-5xl">Nuestra compañia</p>
                            <p className="text-lg text-light text-gray-300 lg:text-2xl">Somos una empresa tecnológica que crea productos digitales para simplificar la vida de las personas.</p>
                        </h1>
                    </div>
                </div>

            </section>

        </main>

    )

}