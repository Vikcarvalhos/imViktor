import {Link} from 'react-router-dom'
import { motion } from "framer-motion"
g
function Nav(){

    return(
        <>
            <header className='menu'>
                <nav className='nav-menu'>
                    <div id='nav-logo'>
                        <img src=''></img>
                    </div>
                    <div id='nav-links'>
                        <Link to="/">Home</Link>
                        <Link to="/sobre">Sobre</Link>
                        <Link to="/portifolio">Portifolio</Link>
                        <Link to="/contato">Contato</Link> 
                    </div>               
                </nav>
            </header>
        </>
    )
}

export default Nav