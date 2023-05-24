import { useParams } from 'react-router-dom'
import Projet from '../components/projet'

function SingleProjet({ projets }) {
    const { id } = useParams()
    const projet = projets.find((projet) => projet.id.toString() === id)

    if (!projet) {
        return <p>Projet ko</p>
    }
    return (
        <div className='App'>
            <Projet nom={projet.nom} img={projet.img} lien={projet.url} description={projet.desc} />
        </div>
    )
}

export default SingleProjet
