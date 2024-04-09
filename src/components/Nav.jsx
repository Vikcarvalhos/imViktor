import {Link} from 'react-router-dom'
import '../css/nav.css'
import { motion } from "framer-motion"

function Nav(){

    return(
        <>
            <header className='menu'>
                <nav className='nav-menu'>
                    <div id='nav-links'>
                        <Link to="/" className='hover-underline'>Home</Link>
                        <Link to="/sobre" className='hover-underline'>Sobre</Link>
                        <Link to="/portifolio" className='hover-underline'>Portifolio</Link>
                        <Link to="/contato" className='hover-underline'>Contato</Link> 
                    </div>               
                </nav>
            </header>
        </>
    )
}

export default Nav