import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import About from '../pages/about'
import Layout from '../components/layout/layout'
import NoMatch from './noMatch'
import ProjetsPages from '../pages/ProjetsPages'
import SingleProjet from '../pages/SingleProjet'

import devops from '../Devops.svg'
import projetApi from '../projet-api.gif'
import backoffice from '../backOffice.jpg'

const projet = [
    {
        id: 1,
        nom: 'Projet Devops',
        url: 'https://github.com/zbrwkq/projet-Devops',
        img: devops,
        desc: 'Mise en place un container symfony, mysql. Docker + minicube',
    },
    {
        id: 2,
        nom: 'Projet Api JS',
        url: 'https://exemple.com/projet2',
        img: projetApi,
        desc: 'utilisation de API de rick & Morty en JS ',
    },
    {
        id: 3,
        nom: 'Projet back office',
        url: 'https://github.com/ermelindo-mendes/Back_office',
        img: backoffice,
        desc: "Projet de gestion d'un back office en symfony",
    },
]

const Routeur = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<NoMatch />} />
                    <Route path='projets' element={<ProjetsPages />} />
                    <Route path='projets/:id' element={<SingleProjet projets={projet} />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routeur
