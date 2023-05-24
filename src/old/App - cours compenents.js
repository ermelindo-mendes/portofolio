import './App.css'
import Layout from './components/layout/layout'
import Projet from './components/projet'
import Logo from './logo.svg'

function App() {
    return (
        <div className='app'>
            <Layout>
                <p>Je suis dans la balise Main</p>
            </Layout>

            <Projet nom='Projet1' img={Logo} lien='https://google.com' />
            <Projet nom='Projet2' img={Logo} lien='https://google.com' />
        </div>
    )
}

export default App
