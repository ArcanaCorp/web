import { Link } from 'react-router-dom'
import Image from '../../components/Image'
import { images } from '../../helpers/images'
import './styles/layout.css'

export default function Footer () {

    return (

        <footer className="--footer w-full">

            <div className="--footer-box flex m-auto gap-lg flex-col">

                <div className="--footer-row w-full flex flex-wrap pv-xl">
                    <div className='--footer-row-col --footer-row-A'>
                        <p className='text-lg'>Experimente el despegue</p>
                    </div>
                    <div className='--footer-row-col --footer-row-B'>
                        <p className='text-md mb-lg text-medium'>Productos</p>
                        <ul className="flex flex-col gap-md">
                            <li><a href="https://andaleya.pe" target='_blank' rel='noreferrer' className='text-sm'>Ándale Ya!</a></li>
                            <li><a href="https://andaleya.pe" target='_blank' rel='noreferrer' className='text-sm'>Tuttis</a></li>
                            <li><a href="https://andaleya.pe" target='_blank' rel='noreferrer' className='text-sm'>Rizzo</a></li>
                            <li><a href="https://andaleya.pe" target='_blank' rel='noreferrer' className='text-sm'>Facturame</a></li>
                        </ul>
                    </div>
                    <div className='--footer-row-col --footer-row-C'>
                        <p className='text-md mb-lg text-medium'>Recursos</p>
                        <ul className="flex flex-col gap-md">
                            <li><Link to="/careers" className='text-sm'>Carreras</Link></li>
                            <li><Link to="/platform" className='text-sm'>Plataforma</Link></li>
                            <li><Link to="/ecosystem" className='text-sm'>Ecosistema</Link></li>
                            <li><Link to="/research" className='text-sm'>Investigación</Link></li>
                        </ul>
                    </div>
                    <div className='--footer-row-col --footer-row-D'>
                        <p className='text-md mb-lg text-medium'>Compañía</p>
                        <ul className="flex flex-col gap-md">
                            <li><Link to="/company" className='text-sm'>Compañia</Link></li>
                            <li><Link to="/devs" className='text-sm'>Desarrolladores</Link></li>
                            <li><Link to="/legal/privacy" className='text-sm'>Privacidad</Link></li>
                            <li><Link to="/legal/terms" className='text-sm'>Términos</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className='pv-xl'>
                    <Image url={images.logo} alt={'Logo de ARCANA CORP'} />
                </div>

            </div>

        </footer>

    )

}