import Projet from '../components/projets'
import devops from '../Devops.svg'
import projetApi from '../projet-api.gif'
import backoffice from '../backOffice.jpg'
import { Link } from 'react-router-dom'

const projetListe = [
    { id: 1, nom: 'Projet Devops', url: 'https://github.com/zbrwkq/projet-Devops', img: devops },
    { id: 2, nom: 'Projet Api JS', url: 'https://exemple.com/projet2', img: projetApi },
    {
        id: 3,
        nom: 'Projet back office',
        url: 'https://github.com/ermelindo-mendes/Back_office',
        img: backoffice,
    },
]

function ProjetsPages() {
    return (
        <div className='App'>
            <h3>Mes Projets</h3>
            {projetListe.map((data) => (
                <Link key={data.id} to={`/projets/${data.id}`}>
                    <Projet nom={data.nom} img={data.img} lien={data.url} />
                </Link>
            ))}
        </div>
    )
}

export default ProjetsPages
