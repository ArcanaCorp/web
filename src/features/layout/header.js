import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../components/Image";
import { images } from "../../helpers/images";
import { siteMap } from "../../sitemap";
import { Icon } from "../../helpers/icons";

import './styles/layout.css'

export default function Header () {

    const [ menu, setMenu ] = useState(false);

    const handleToogleMenu = () => {
        setMenu(!menu)
        document.body.classList.toggle('overflow-hidden')
    }

    return (

        <header className="--header relative w-full">
            <div className="--header-box h-inherit m-auto flex items-center justify-between">
                <div className="--header-col-A flex lg:gap-lg items-center">
                    <Link to={'/'}>
                        <Image url={images.logo} alt={'Logo de ARCANA CORP'} />
                    </Link>
                    <ul className="hidden lg:flex lg:gap-md">
                        {siteMap.filter((i) => i.position === 'header').map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className="flex items-center gap-sm text-sm text-medium pv-xs ph-sm hover rounded-pill">
                                    {item.name} {item.children?.length > 0 ? <Icon name="chevron-down" /> : ''}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="--header-col-B flex items-center">
                    <button className="w-50 center pv-xs bg-dark hover rounded-pill lg:hidden" onClick={handleToogleMenu}>
                        <Icon name={!menu ? 'menu' : 'close'} size="lg" />
                    </button>
                    <a href="/contact" className="hidden lg:block pv-xs ph-md bg-muted hover rounded-pill text-white text-sm text-medium">Contacto</a>
                </div>
            </div>
            <nav className={`--header-nav ${menu ? '--header-nav-active' : ''} absolute w-full bg-dark`}>
                <ul className="--header-nav-items m-auto flex flex-col gap-md">
                    {siteMap.filter((i) => i.position === 'header').map((item, index) => (
                        <li key={index} className="pv-md">
                            <a href={item.path} className="flex items-center gap-sm text-lg text-medium pv-xs ph-sm rounded-pill">
                                {item.name} {item.children?.length > 0 ? <Icon name="chevron-down" /> : ''}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )

}