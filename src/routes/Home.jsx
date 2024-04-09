import '../css/style.css'
import { motion } from "framer-motion"

function Home(){

    return(
        <>
            <main id='main-content'>
                <motion.div className='home'>
                    <h1>Home</h1>
                    <p>Seja bem-vindo(a) ao meu site! Aqui você encontrará informações sobre mim e sobre o meu trabalho.</p>
                </motion.div>
            </main>
        </>
    )
}

export default Home