import logo from './linkedin.jpg';
import git from './github.png';
import devops from './Devops.svg';
import projetApi from './projet-api.gif'
import backoffice from './backOffice.jpg'
import './App.css';
import Nom from './components/nom';
import Lien from './components/lien';
import Diplomes from './components/diplomes';
import Competences from './components/competences';
import CentreInteret from './components/centreInteret';
import Projet from './components/projet';

const liens = [
  { id: 1, nom: 'BTS SIO SLAM', url: 'https://www.linkedin.com/in/ermelindo-mendes-lopes-506a8121b/', img: logo },
  { id: 2, nom: 'GitHub', url: 'https://github.com/ermelindo-mendes/', img: git },
]

const diplomes = [
  { id: 1, nom: 'BTS SIO SLAM' },
  { id: 2, nom: 'Bac Pro Elec' },
]

const centreDinterets = [
  { id: 1, nom: 'Mangas' },
  { id: 2, nom: 'Jeux Videos' },
  { id: 2, nom: 'Nouvelles technologies' },
]

const competences = [
  { id: 1, nom: 'PHP', niv: 'Debutant' },
  { id: 2, nom: 'Node Js', niv: 'Debutant' },
  { id: 3, nom: 'Symfony', niv: 'Debutant' },
  { id: 4, nom: 'Python', niv: 'Debutant' },
  
]

const projets = [
  { id: 1, nom: 'Projet Devops', url: 'https://github.com/zbrwkq/projet-Devops', img: devops },
  { id: 2, nom: 'Projet Api JS', url: 'https://exemple.com/projet2', img: projetApi },
  { id: 3, nom: 'Projet back office', url: 'https://github.com/ermelindo-mendes/Back_office', img: backoffice },
]



function App() {
  return (
    <div className="App">
      <Nom
      nom='Mendes Lopes '
      prenom='Ermelindo '
      poste='Assistant développement & support'
      />

      {liens.map((data) => (
                    <Lien key={data.id} nom={data.nom} img={data.img} lien={data.url} />
                ))}

      

      <h3>Diplomes</h3>

      {diplomes.map((data) => (
                    <Diplomes key={data.id} nom={data.nom} />
                ))}

      <h3>Competences</h3>

      {competences.map((data) => (
                    <Competences key={data.id} nom={data.nom} niveau={data.niv} />
                ))}

      

      <h3>Centre d&apos;intérêt</h3>


      {centreDinterets.map((data) => (
                    <CentreInteret key={data.id} nom={data.nom} />
                ))} 

      <h3>Projets</h3>

      {projets.map((data) => (
                    <Projet key={data.id} nom={data.nom} img={data.img} lien={data.url} />
                ))}


    </div>
  );
}

export default App;
